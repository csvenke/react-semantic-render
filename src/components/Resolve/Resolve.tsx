import * as PropTypes from 'prop-types';
import * as React from 'react';
import { isPromise } from '../../utils';
import { statusTypes } from './config';

export interface IResolveProps {
  /** The promise to be resolved */
  promise?: Promise<any>;

  /** Will be displayed after promise is resolved */
  resolved?: (value) => React.ReactNode;

  /** Will be displayed while promise is handled */
  pending?: React.ReactNode;

  /** Will be displayed if promise is rejected */
  rejected?: (error) => React.ReactNode;
}

export const initialState = {
  status: statusTypes.none,
  value: '',
};

export type IResolveState = Readonly<typeof initialState>;

/**
 * Returns content based on specified promise.
 *
 * @example
 *
 * <Resolve
 *  promise={aPromise}
 *  resolved={value => (
 *    <p>{`Resolved value ${value}`}</p>
 *  )}
 * />
 */
class Resolve extends React.Component<IResolveProps, IResolveState> {
  public static propTypes = {
    pending: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    promise: isPromise,
    rejected: PropTypes.func,
    resolved: PropTypes.func,
  };

  // Initialize state
  public readonly state: IResolveState = initialState;

  // Create escape hatch to stop handling of promise if unmounted
  public unmounted = false;

  public componentDidMount() {
    // Start handling the promise, must happen after mount as setState is called when promise is handled
    this.handlePromise(this.props.promise);
  }

  public componentDidUpdate(prevProps) {
    if (this.props.promise !== prevProps.promise) {
      this.setState({
        status: statusTypes.none,
      });
      this.handlePromise(this.props.promise);
    }
  }

  public componentWillUnmount() {
    this.unmounted = true;
  }

  public render() {
    const { pending, resolved, rejected } = this.props;
    const { status, value } = this.state;

    switch (status) {
      case statusTypes.none:
        break;
      case statusTypes.pending:
        if (pending) {
          return pending;
        }
        break;
      case statusTypes.resolved:
        if (resolved) {
          return resolved(value);
        }
        break;
      case statusTypes.rejected:
        if (rejected) {
          return rejected(value);
        }
        break;
      default:
        break;
    }

    return null;
  }

  // Promise resolver function
  private handlePromise(promise) {
    // Store the current promise to fast exit if promise is change during handling
    const currentPromise = promise;
    this.setState({
      status: statusTypes.pending,
    });
    promise
      .then(success => {
        // Escape early as promise is changed
        if (currentPromise !== promise) {
          return;
        }
        if (!this.unmounted) {
          this.setState({
            status: statusTypes.resolved,
            value: success,
          });
        }
      })
      .catch(reason => {
        // Escape early as promise is changed
        if (currentPromise !== promise) {
          return;
        }
        if (!this.unmounted) {
          this.setState({
            status: statusTypes.rejected,
            value: reason,
          });
        }
      });
  }
}

export default Resolve;

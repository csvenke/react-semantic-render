import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface IResolveProps {
  /** The promise. */
  promise: Promise<any>;

  /** Returns content when promise is resolved. */
  resolved?: (value: any) => React.ReactNode;

  /** Returns content while promise is being handled. */
  pending?: React.ReactNode;

  /** Returns content when promise is rejected. */
  rejected?: (error: any) => React.ReactNode;
}

export const statusTypes = {
  none: 'none',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};

export const initialState = {
  status: statusTypes.none,
  value: '',
};

export type IResolveState = Readonly<typeof initialState>;

/**
 * Semantic helper component that returns content based on the status of the specified promise.
 */
class Resolve extends React.Component<IResolveProps, IResolveState> {
  public static propTypes = {
    pending: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    promise: PropTypes.instanceOf(Promise).isRequired,
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

  public componentDidUpdate(prevProps: IResolveProps) {
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
  private handlePromise(promise: Promise<any>) {
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

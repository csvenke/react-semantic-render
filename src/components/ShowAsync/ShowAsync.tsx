import * as PropTypes from 'prop-types';
import * as React from 'react';

const statusTypes = {
  none: 'none',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};

const initialState = {
  status: statusTypes.none,
  value: '',
};

export interface IShowAsyncProps {
  /** The promise. */
  when: Promise<any>;

  /** Render content when promise is pending. */
  pending?: () => React.ReactNode;

  /** Render content when promise is rejected. */
  rejected?: (error?: any) => React.ReactNode;

  /** Shorthand for primary content. */
  render?: (value?: any) => React.ReactNode;

  /** Primary content. Renders content when promise is resolved. */
  children?: any;
}

export type IShowAsyncState = Readonly<typeof initialState>;

/**
 * Renders content when status of specified promise is pending, resolved or rejected.
 */
export class ShowAsync extends React.Component<IShowAsyncProps, IShowAsyncState> {
  public static propTypes = {
    children: PropTypes.func,
    pending: PropTypes.func,
    rejected: PropTypes.func,
    render: PropTypes.func,
    when: PropTypes.instanceOf(Promise).isRequired,
  };

  // Initialize state
  public readonly state: IShowAsyncState = initialState;

  // Create escape hatch to stop handling of promise if unmounted
  public unmounted = false;

  public componentDidMount() {
    // Start handling the promise, must happen after mount as setState is called when promise is handled
    this.handlePromise(this.props.when);
  }

  public componentDidUpdate(prevProps: IShowAsyncProps) {
    if (this.props.when !== prevProps.when) {
      this.setState({
        status: statusTypes.none,
      });
      this.handlePromise(this.props.when);
    }
  }

  public componentWillUnmount() {
    this.unmounted = true;
  }

  public render() {
    const { pending, render, rejected, children } = this.props;
    const { status, value } = this.state;

    switch (status) {
      case statusTypes.pending:
        return pending ? pending() : null;

      case statusTypes.resolved:
        if (children && typeof children === 'function') {
          return children(value);
        }
        if (render) {
          return render(value);
        }
        return null;

      case statusTypes.rejected:
        return rejected ? rejected(value) : null;
      default:
        return null;
    }
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

export default ShowAsync;

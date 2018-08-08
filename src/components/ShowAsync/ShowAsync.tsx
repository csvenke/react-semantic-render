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

  public async componentDidMount() {
    // Start handling the promise, must happen after mount as setState is called when promise is handled
    await this.handlePromise(this.props.when);
  }

  public render() {
    const { pending, render, rejected, children } = this.props;
    const { status, value } = this.state;

    switch (status) {
      case statusTypes.pending:
        if (pending) {
          return pending();
        }
        break;

      case statusTypes.resolved:
        if (children && typeof children === 'function') {
          return children(value);
        }
        if (render) {
          return render(value);
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
    this.setState({ status: statusTypes.pending });
    return promise
      .then(success => {
        this.setState({
          status: statusTypes.resolved,
          value: success,
        });
      })
      .catch(reason => {
        this.setState({
          status: statusTypes.rejected,
          value: reason,
        });
      });
  }
}

export default ShowAsync;

/// <reference types="react" />

interface ICoreProps {
  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: any;
}

declare module 'react-semantic-render/List' {
  interface IListProps {
    /** Array to map. */
    items: any[];
    /** Shorthand for primary content. */
    render?: (item?: any, index?: number, array?: any[]) => React.ReactNode;
    /** Primary content. */
    children?: any;
  }

  /**
   * Renders content from specified callback function from either `render` or `children` on each element of `items`.
   */
  export const List: React.SFC<IListProps>;

  export default List;
}

declare module 'react-semantic-render/Show' {
  interface IShowProps extends ICoreProps {
    /** Conditional statement.  */
    when: boolean;
  }

  /**
   * Renders content if `when` equals true.
   */
  export const Show: React.SFC<IShowProps>;

  export default Show;
}

declare module 'react-semantic-render/ShowAsync' {
  const initialState: {
    status: string;
    value: string;
  };

  interface IShowAsyncProps {
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

  type IShowAsyncState = Readonly<typeof initialState>;

  /**
   * Renders content when status of specified promise is pending, resolved or rejected.
   */
  export class ShowAsync extends React.Component<IShowAsyncProps, IShowAsyncState> {}
  export default ShowAsync;
}

declare module 'react-semantic-render/Switch' {
  interface ISwitchProps {
    /** Conditional statement. */
    value: any;
    /** Primary content. */
    children: React.ReactNode;
  }

  interface ISwitchCaseProps extends ICoreProps {
    /** Conditional statement. */
    value: any;
  }

  /**
   * Helper component that is accessed from `Switch` component.
   */
  const SwitchCase: React.SFC<ISwitchCaseProps>;

  /**
   * Helper component that is accessed from `Switch` component.
   */
  const SwitchDefault: React.SFC<ICoreProps>;

  type SwitchComponent = React.SFC<ISwitchProps> & {
    Case?: typeof SwitchCase;
    Default?: typeof SwitchDefault;
  };

  /**
   * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
   */
  export const Switch: SwitchComponent;

  export default Switch;
}

declare module 'react-semantic-render' {
  import List from 'react-semantic-render/List';
  import Show from 'react-semantic-render/Show';
  import ShowAsync from 'react-semantic-render/ShowAsync';
  import Switch from 'react-semantic-render/Switch';

  export { List, Show, ShowAsync, Switch };
}

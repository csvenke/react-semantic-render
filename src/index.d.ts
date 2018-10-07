/// <reference types="react" />

type TRender = () => React.ReactNode;

type TChildren = React.ReactNode | (() => React.ReactNode);

type TOutput = React.ReactElement<any> | null;

type TMap = (item?: any, index?: number, array?: any[]) => React.ReactNode;

interface IRenderProps {
  /** Shorthand for primary content. */
  render?: TRender;
  /** Primary content. */
  children?: TChildren;
}

declare module 'react-semantic-render/List' {
  interface IListProps {
    /** Array to map. */
    items: any[];
    /** Shorthand for primary content. */
    render?: TMap;
    /** Primary content. */
    children?: TMap;
  }

  /**
   * Renders content from specified callback function from either `render` or `children` on each element of `items`.
   */
  const List: (props: IListProps) => TOutput;

  export default List;
}

declare module 'react-semantic-render/Show' {
  interface IShowProps extends IRenderProps {
    /** Conditional statement.  */
    when: boolean;
  }

  /**
   * Renders content if `when` equals true.
   */
  const Show: (props: IShowProps) => TOutput;

  export default Show;
}

declare module 'react-semantic-render/ShowIfElse' {
  interface IShowIfElse {
    /** Conditional statement.  */
    condition: boolean;
    /** Renders when condition is true. */
    if: TRender;
    /** Renders when condition is false. */
    else: TRender;
  }

  /**
   * Renders content from if when condition equals true, else renders content from else.
   */
  const ShowIfElse: (props: IShowIfElse) => TOutput;

  export default ShowIfElse;
}

declare module 'react-semantic-render/Switch' {
  interface ISwitchProps {
    /** Conditional statement. */
    value: any;
    /** Primary content. */
    children: React.ReactNode;
  }

  interface ISwitchCaseProps extends IRenderProps {
    /** Conditional statement. */
    value: any;
  }

  /**
   * Helper component that is accessed from `Switch` component.
   */
  const SwitchCase: (props: ISwitchCaseProps) => TOutput;

  /**
   * Helper component that is accessed from `Switch` component.
   */
  const SwitchDefault: (props: IRenderProps) => TOutput;

  /**
   * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
   */
  const Switch: {
    (props: ISwitchProps): TOutput;
    Case: (props: ISwitchCaseProps) => TOutput;
    Default: (props: IRenderProps) => TOutput;
  };

  export default Switch;
}

declare module 'react-semantic-render/Hideable' {
  interface IHideableProps {
    showWhen: boolean;
  }

  /**
   * Higher order component that injects 'hideComponent' prop into specified component.
   */
  const Hideable: <P extends object>(
    Component: React.ComponentType<P>,
  ) => React.SFC<P & IHideableProps>;

  export default Hideable;
}

declare module 'react-semantic-render' {
  import Hideable from 'react-semantic-render/Hideable';
  import List from 'react-semantic-render/List';
  import Show from 'react-semantic-render/Show';
  import ShowIfElse from 'react-semantic-render/ShowIfElse';
  import Switch from 'react-semantic-render/Switch';

  export { List, Show, ShowIfElse, Switch, Hideable };
}

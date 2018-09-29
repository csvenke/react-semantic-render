/// <reference types="react" />

type Render = () => React.ReactNode;

type Children = React.ReactNode | (() => React.ReactNode);

type Output = React.ReactElement<any> | null;

interface IRenderProps {
  /** Shorthand for primary content. */
  render?: Render;
  /** Primary content. */
  children?: Children;
}

declare module 'react-semantic-render/List' {
  type MapCallback = (item?: any, index?: number, array?: any[]) => React.ReactNode;

  interface IListProps {
    /** Array to map. */
    items: any[];
    /** Shorthand for primary content. */
    render?: MapCallback;
    /** Primary content. */
    children?: MapCallback;
  }

  /**
   * Renders content from specified callback function from either `render` or `children` on each element of `items`.
   */
  const List: (props: IListProps) => Output;

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
  const Show: (props: IShowProps) => Output;

  export default Show;
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
  const SwitchCase: (props: ISwitchCaseProps) => Output;

  /**
   * Helper component that is accessed from `Switch` component.
   */
  const SwitchDefault: (props: IRenderProps) => Output;

  /**
   * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
   */
  const Switch: {
    (props: ISwitchProps): Output;
    Case: (props: ISwitchCaseProps) => Output;
    Default: (props: IRenderProps) => Output;
  };

  export default Switch;
}

declare module 'react-semantic-render' {
  import List from 'react-semantic-render/List';
  import Show from 'react-semantic-render/Show';
  import Switch from 'react-semantic-render/Switch';

  export { List, Show, Switch };
}

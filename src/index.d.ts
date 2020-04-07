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

declare module "react-semantic-render/List" {
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

declare module "react-semantic-render/Show" {
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

declare module "react-semantic-render/Switch" {
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
   * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
   */
  const Switch: {
    (props: ISwitchProps): TOutput;
    /**
     * Helper component that is accessed from `Switch` component.
     */
    Case: (props: ISwitchCaseProps) => TOutput;
    /**
     * Helper component that is accessed from `Switch` component.
     */
    Default: (props: IRenderProps) => TOutput;
  };

  export default Switch;
}

declare module "react-semantic-render" {
  import List from "react-semantic-render/List";
  import Show from "react-semantic-render/Show";
  import Switch from "react-semantic-render/Switch";

  export { List, Show, Switch };
}

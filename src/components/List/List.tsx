import * as PropTypes from 'prop-types';
import * as React from 'react';

export type ListItemCallbackFn = (
  value?: any,
  index?: number,
  array?: any[],
) => React.ReactNode;

export interface IListProps {
  /** Array to map. */
  items: any[];

  /** Shorthand for primary content. */
  render?: ListItemCallbackFn;

  /** Primary content. */
  children?: any;
}

/**
 * Semantic helper component that calls the specified callback function in either `render` or `children` on each element of `items`.
 */
const List: React.SFC<IListProps> = ({ items, render, children }) => {
  const func = children ? children : render;

  if (!func) {
    return null;
  }

  return <React.Fragment>{items.map((a, b, c) => func(a, b, c))}</React.Fragment>;
};

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func,
};

export default List;

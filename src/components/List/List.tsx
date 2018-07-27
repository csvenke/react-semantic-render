import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface IListProps {
  /** Array to map. */
  items: any[];

  /** Shorthand for primary content. */
  render?: (value?: any, index?: number, array?: any[]) => React.ReactNode;

  /** Primary content. */
  children?: (value?: any, index?: number, array?: any[]) => React.ReactNode;
}

/**
 * Calls `render` or `children` on each element of `items`, and returns the result.
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

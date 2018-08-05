import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface IListProps {
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
export const List: React.SFC<IListProps> = ({ items, render, children }) => {
  const itemRender = children ? children : render;

  if (!itemRender) {
    return null;
  }

  return <>{items.map(itemRender)}</>;
};

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func,
};

export default List;

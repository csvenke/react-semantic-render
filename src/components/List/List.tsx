import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Map, Output } from '../../types';
import { getRenderProp, isFunction } from '../../utils';

interface IListProps {
  /** Array to map. */
  items: any[];

  /** Shorthand for primary content. */
  render?: Map;

  /** Primary content. */
  children?: Map;
}

/**
 * Renders content from specified callback function from either `render` or `children` on each element of `items`.
 */
const List = (props: IListProps): Output => {
  const { items, children, render } = props;
  const renderProp = getRenderProp(children, render);

  if (renderProp && isFunction(renderProp)) {
    return <React.Fragment>{items.map(renderProp)}</React.Fragment>;
  }

  return null;
};

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func,
};

export default List;

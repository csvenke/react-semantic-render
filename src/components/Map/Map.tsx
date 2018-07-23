import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface IMapProps {
  /** Array to map. */
  array: any[];

  /** Shorthand for primary content. */
  render?: (value?: any, index?: number, array?: any[]) => React.ReactNode;

  /** Primary content. */
  children?: (value?: any, index?: number, array?: any[]) => React.ReactNode;
}

/**
 * Calls `render` or `children` on each element of `array`, and returns the result.
 */
const Map: React.SFC<IMapProps> = ({ array, render, children }) => {
  const func = children ? children : render;

  if (!func) {
    return null;
  }

  return <React.Fragment>{array.map((a, b, c) => func(a, b, c))}</React.Fragment>;
};

Map.propTypes = {
  array: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.func,
  render: PropTypes.func,
};

export default Map;

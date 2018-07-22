import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface IArrayMapProps {
  /** Array to map. */
  array: any[];

  /** Shorthand for primary content. */
  render?: (value?: any, index?: number, array?: any[]) => React.ReactNode;

  /** Primary content. */
  children?: (value?: any, index?: number, array?: any[]) => React.ReactNode;
}

/**
 * Calls `render` or `children` on each element of `array`, and returns the result.
 *
 * @example
 *
 * <ArrayMap
 *  array={[1, 2, 3]}
 *  render={n => <div>{n}</div>}
 * />
 *
 * <ArrayMap array={[1, 2, 3]}>
 *  {n => <div>{n}</div>}
 * </ArrayMap>
 */
const ArrayMap: React.SFC<IArrayMapProps> = ({ array, render, children }) => {
  const func = children ? children : render;

  if (!func) {
    return null;
  }

  return <React.Fragment>{array.map((a, b, c) => func(a, b, c))}</React.Fragment>;
};

ArrayMap.propTypes = {
  array: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.func,
  render: PropTypes.func,
};

export default ArrayMap;

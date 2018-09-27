import * as PropTypes from 'prop-types';
import * as React from 'react';

export type Map =
  | ((item?: any, index?: number, array?: any[]) => React.ReactNode)
  | null;

export type Render = (() => React.ReactNode) | null;

export type Children = React.ReactNode | (() => React.ReactNode) | null;

export interface IRenderProps {
  /** Shorthand for primary content. */
  render?: Render;

  /** Primary content. */
  children?: Children;
}

export const renderPropsPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
};

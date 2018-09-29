import * as PropTypes from 'prop-types';
import * as React from 'react';

export type Map = (item?: any, index?: number, array?: any[]) => React.ReactNode;

export type Render = () => React.ReactNode;

export type Children = React.ReactNode | (() => React.ReactNode);

export type Output = React.ReactElement<any> | null;

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

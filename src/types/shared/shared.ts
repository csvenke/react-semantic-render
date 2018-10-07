import * as PropTypes from 'prop-types';
import * as React from 'react';

export type TMap = (item?: any, index?: number, array?: any[]) => React.ReactNode;

export type TRender = () => TOutput;

export type TChildren = React.ReactNode | (() => React.ReactNode);

export type TOutput = React.ReactElement<any> | null;

export interface IRenderProps {
  /** Shorthand for primary content. */
  render?: TRender;

  /** Primary content. */
  children?: TChildren;
}

export const renderPropsPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
};

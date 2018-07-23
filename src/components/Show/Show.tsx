import * as PropTypes from 'prop-types';
import * as React from 'react';

import { isEmptyChildren } from '../../utils';

export interface IShowProps {
  /** Conditional statement. Will be cast to true/false value  */
  when: any;

  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

/**
 * Renders primary content if `when` equals true.
 *
 * @example
 *
 * <Show when={2 === 1 + 1}>
 *  <div>render me</div>
 * </Show>
 *
 * <Show
 *  when={2 === 1 + 1}
 *  render={() => <div>render me</div>}
 * />
 */
const Show: React.SFC<IShowProps> = ({ when, render, children }) => {
  if (!!when) {
    if (children && !isEmptyChildren(children)) {
      return React.Children.only(children);
    }

    if (render) {
      return <React.Fragment>{render()}</React.Fragment>;
    }
  }

  return null;
};

Show.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  when: PropTypes.any,
};

export default Show;

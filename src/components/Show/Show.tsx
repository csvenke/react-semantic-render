import * as PropTypes from 'prop-types';
import * as React from 'react';

import { getChildrenOrRender } from '../../utils';

export interface IShowProps {
  /** Conditional statement.  */
  when: boolean;

  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

/**
 * Semantic helper component that return content if `when` equals true.
 */
const Show: React.SFC<IShowProps> = ({ when, render, children }) => {
  return when ? getChildrenOrRender(children, render) : null;
};

Show.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  when: PropTypes.bool.isRequired,
};

export default Show;

import * as PropTypes from 'prop-types';
import * as React from 'react';

import { corePropTypes, getChildrenOrRender, ICoreProps } from '../../utils';

export interface IShowProps extends ICoreProps {
  /** Conditional statement.  */
  when: boolean;
}

/**
 * Renders content if `when` equals true.
 */
export const Show: React.SFC<IShowProps> = ({ when, render, children }) => {
  return when ? getChildrenOrRender(children, render) : null;
};

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  ...corePropTypes,
};

export default Show;

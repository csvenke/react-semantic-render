import * as PropTypes from 'prop-types';
import * as React from 'react';

import { getChildrenOrRender } from '../../utils/';

export interface ISwitchCaseProps {
  /** Conditional statement. */
  value: any;

  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

/**
 * Semantic helper component that can be accessed from the `Switch` component.
 */
// @ts-ignore `value` prop is used by parent component Switch.
const SwitchCase: React.SFC<ISwitchCaseProps> = ({ value, render, children }) => {
  return getChildrenOrRender(children, render);
};

SwitchCase.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  value: PropTypes.any.isRequired,
};

export default SwitchCase;

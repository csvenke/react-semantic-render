import * as PropTypes from 'prop-types';
import * as React from 'react';

import { corePropTypes, getChildrenOrRender, ICoreProps } from '../../utils/';

export interface ISwitchCaseProps extends ICoreProps {
  /** Conditional statement. */
  value: any;
}

/**
 * Helper component that is accessed from `Switch` component.
 */
// @ts-ignore `value` prop is used by parent component Switch.
export const SwitchCase: React.SFC<ISwitchCaseProps> = ({ value, render, children }) => {
  return getChildrenOrRender(children, render);
};

SwitchCase.propTypes = {
  value: PropTypes.any.isRequired,
  ...corePropTypes,
};

export default SwitchCase;

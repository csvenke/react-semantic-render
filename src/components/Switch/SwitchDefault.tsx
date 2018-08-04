import * as React from 'react';

import {
  corePropTypes,
  getChildrenOrRender,
  ICoreProps as ISwitchDefaultProps,
} from '../../utils';

/**
 * Helper component that is accessed from `Switch` component.
 */
const SwitchDefault: React.SFC<ISwitchDefaultProps> = ({ render, children }) => {
  return getChildrenOrRender(children, render);
};

SwitchDefault.propTypes = corePropTypes;

export default SwitchDefault;

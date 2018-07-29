import * as PropTypes from 'prop-types';
import * as React from 'react';

import SwitchCase from './SwitchCase';

export interface ISwitchDefaultProps {
  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

/**
 * Semantic helper component that can be accessed from the `Switch` component.
 */
const SwitchDefault: React.SFC<ISwitchDefaultProps> = ({ render, children }) => {
  const value = '__SWITCH_CASE_VALUE_OVERRIDE_USE_THIS_AND_YOU_WILL_BE_FIRED__';
  return (
    <SwitchCase value={value} render={render}>
      {children}
    </SwitchCase>
  );
};

SwitchDefault.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
};

export default SwitchDefault;

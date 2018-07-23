import * as PropTypes from 'prop-types';
import * as React from 'react';

import SwitchCase from './SwitchCase';

export interface ISwitchDefaultProps {
  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

const SwitchDefault: React.SFC<ISwitchDefaultProps> = ({ render, children }) => {
  const value = '__switch_case_value_override__';
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

import * as PropTypes from 'prop-types';
import * as React from 'react';

import SwitchCase from './SwitchCase';
import SwitchDefault from './SwitchDefault';

export interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

/**
 * Returns primary content of first case that matches, returns default if no match and null if no default.
 *
 * @example
 *
 * <Switch value={3}>
 *  <Switch.Case value={1}>
 *    <div>Render me!</div>
 *  </Switch.Case>
 *  <Switch.Case value={2}>
 *    <div>No, render me!</div>
 *  </Switch.Case>
 *  <Switch.Default>
 *    <div>Nobody renders better than me!</div>
 *  </Switch.Default>
 * </Switch>
 */
class Switch extends React.Component<ISwitchProps> {
  public static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.any.isRequired,
  };

  public static Case = SwitchCase;

  public static Default = SwitchDefault;

  public render() {
    return null;
  }
}

export default Switch;

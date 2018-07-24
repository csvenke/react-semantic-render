import * as PropTypes from 'prop-types';
import * as React from 'react';

import SwitchCase, { ISwitchCaseProps } from './SwitchCase';
import SwitchDefault, { ISwitchDefaultProps } from './SwitchDefault';

type SwitchChildProps = ISwitchCaseProps & ISwitchDefaultProps;

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
 *    <div>No, render me!</div>
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
    const switchValue = this.props.value;
    let match;
    let child;

    React.Children.forEach(
      this.props.children,
      (element: React.ReactElement<SwitchChildProps>) => {
        if (match === undefined && React.isValidElement(element)) {
          const caseValue = element.props.value;
          child = element;
          match = caseValue === switchValue || undefined;
        }
      },
    );

    // No match found, return default if it exists.
    if (!match && !child.props.value) {
      return React.cloneElement(child);
    }

    // Return case if its a match.
    return match ? React.cloneElement(child) : null;
  }
}

export default Switch;

import * as PropTypes from 'prop-types';
import * as React from 'react';

import SwitchCase, { ISwitchCaseProps } from './SwitchCase';
import SwitchDefault, { ISwitchDefaultProps } from './SwitchDefault';

export { ISwitchDefaultProps, ISwitchCaseProps };
export interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

/**
 * Semantic helper component that returns content of the first case that matches `value`.
 * It returns default if it exists and null if no default exists.
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
    let match: boolean | undefined;
    let child: any;

    React.Children.forEach(this.props.children, element => {
      if (
        match === undefined &&
        React.isValidElement(element) &&
        this.isValidChild(element)
      ) {
        const caseValue = this.getElementValue(element);
        child = element;
        match = caseValue === switchValue || undefined;
      }
    });

    // No match found, return default if it exists.
    if (!match && this.isSwitchDefault(child)) {
      return React.cloneElement(child);
    }

    // Return case if its a match.
    return match ? React.cloneElement(child) : null;
  }

  private getElementValue = (element: any) => {
    if (element && element.props) {
      return element.props.value;
    }
    return undefined;
  };

  private isValidChild = (child: any) => {
    return this.isSwitchCase(child) || this.isSwitchDefault(child);
  };

  private isSwitchCase = (child: any) => {
    return child.type.prototype === SwitchCase.prototype;
  };

  private isSwitchDefault = (child: any) => {
    return child.type.prototype === SwitchDefault.prototype;
  };
}

export default Switch;

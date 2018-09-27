import * as PropTypes from 'prop-types';
import * as React from 'react';

import { renderIf } from '../../utils';
import SwitchCase, { ISwitchCaseProps } from './SwitchCase';
import SwitchDefault from './SwitchDefault';

export interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

type SwitchElement = React.ReactElement<ISwitchCaseProps>;

type SwitchComponent = React.SFC<ISwitchProps> & {
  Case?: typeof SwitchCase;
  Default?: typeof SwitchDefault;
};

const isSwitchChild = (child: any, element: any) => {
  return child.type.prototype === element.prototype;
};

const isValidSwitchChild = (child: any): child is SwitchElement => {
  return (
    React.isValidElement(child) &&
    (isSwitchChild(child, SwitchCase) || isSwitchChild(child, SwitchDefault))
  );
};

/**
 * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
 */
export const Switch: SwitchComponent = ({ children, value }) => {
  const switchValue = value;
  let match = false;
  let child: any;

  React.Children.forEach(children, (element: any) => {
    if (match === false && isValidSwitchChild(element)) {
      const caseValue = element.props.value;
      child = element;
      match = caseValue === switchValue;
    }
  });

  // No match found, return default if it exists.
  if (!match && isSwitchChild(child, SwitchDefault)) {
    return React.cloneElement(child);
  }

  // Return case if its a match.
  return renderIf(match)(React.cloneElement(child));
};

Switch.Case = SwitchCase;
Switch.Default = SwitchDefault;

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
};

export default Switch;

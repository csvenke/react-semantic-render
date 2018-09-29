import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Output } from '../../types';
import { renderIf } from '../../utils';
import SwitchCase from './SwitchCase';
import SwitchDefault from './SwitchDefault';

interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

const isSwitchChild = (child: any, element: any) => {
  return child.type.prototype === element.prototype;
};

const isValidSwitchChild = (child: any) => {
  return (
    React.isValidElement(child) &&
    (isSwitchChild(child, SwitchCase) || isSwitchChild(child, SwitchDefault))
  );
};

/**
 * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
 */
const Switch = (props: ISwitchProps): Output => {
  const { children, value } = props;
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

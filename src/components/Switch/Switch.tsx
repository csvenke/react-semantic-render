import * as PropTypes from 'prop-types';
import * as React from 'react';

import { TOutput } from '../../types';
import { isElement } from '../../utils';
import SwitchCase from './SwitchCase';
import SwitchDefault from './SwitchDefault';

interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

const isValidSwitchChild = (child: any) =>
  React.isValidElement(child) &&
  (isElement(child, SwitchCase) || isElement(child, SwitchDefault));

/**
 * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
 */
const Switch = (props: ISwitchProps): TOutput => {
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
  if (!match && isElement(child, SwitchDefault)) {
    return React.cloneElement(child);
  }

  // Return case if its a match.
  return match ? React.cloneElement(child) : null;
};

Switch.Case = SwitchCase;

Switch.Default = SwitchDefault;

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
};

export default Switch;

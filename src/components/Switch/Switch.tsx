import * as PropTypes from 'prop-types';
import * as React from 'react';

import { TOutput } from '../../types';
import SwitchCase from './SwitchCase';
import SwitchDefault from './SwitchDefault';

interface ISwitchProps {
  /** Conditional statement. */
  value: any;

  /** Primary content. */
  children: React.ReactNode;
}

const getSwitchCaseValue = (element: any) => element.props.value;

/**
 * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
 */
function Switch(props: ISwitchProps): TOutput {
  const switchValue = props.value;
  let match = false;
  let child: any;

  React.Children.forEach(props.children, (element: any) => {
    if (match === false && React.isValidElement(element)) {
      const caseValue = getSwitchCaseValue(element);
      child = element;
      match = caseValue === switchValue;
    }
  });

  // No match found, return default if it exists.
  if (!match && getSwitchCaseValue(child) === undefined) {
    return React.cloneElement(child);
  }

  // Return case if its a match.
  return match ? React.cloneElement(child) : null;
}

Switch.Case = SwitchCase;

Switch.Default = SwitchDefault;

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
};

export default Switch;

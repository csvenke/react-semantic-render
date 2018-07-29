import * as PropTypes from 'prop-types';
import * as React from 'react';

import { isEmptyChildren } from '../../utils';

export interface ISwitchCaseProps {
  /** Conditional statement. */
  value: any;

  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: React.ReactNode;
}

/**
 * Semantic helper component that can be accessed from the `Switch` component.
 * Only ment to be used inside the children of the `Switch` component.
 */
const SwitchCase: React.SFC<ISwitchCaseProps> = ({ value, render, children }) => {
  if (value !== undefined) {
    if (children && !isEmptyChildren(children)) {
      return React.Children.only(children);
    }

    if (render) {
      return <React.Fragment>{render()}</React.Fragment>;
    }
  }

  return null;
};

SwitchCase.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  value: PropTypes.any.isRequired,
};

export default SwitchCase;

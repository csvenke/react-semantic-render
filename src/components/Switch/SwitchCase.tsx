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

const SwitchCase: React.SFC<ISwitchCaseProps> = ({ value, render, children }) => {
  if (value) {
    if (children && !isEmptyChildren(children)) {
      return React.Children.only(children);
    }

    if (render) {
      return <React.Fragment>{render()}</React.Fragment>;
    }
  }

  return null;
};

export default SwitchCase;

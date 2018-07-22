import * as React from 'react';

import { isEmptyChildren } from '../../utils';

export interface IShowProps {
  when: boolean;
  render?: () => React.ReactNode;
  children?: React.ReactNode;
}

const Show: React.SFC<IShowProps> = ({ when, render, children }) => {
  if (when) {
    if (children && !isEmptyChildren(children)) {
      return React.Children.only(children);
    }

    if (render) {
      return <React.Fragment>{render()}</React.Fragment>;
    }
  }

  return null;
};

export default Show;

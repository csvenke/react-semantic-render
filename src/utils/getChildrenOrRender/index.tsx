import * as React from 'react';

import { isEmptyChildren } from '../isEmptyChildren';

export const getChildrenOrRender = (children?: any, render?: () => React.ReactNode) => {
  if (typeof children === 'function') {
    return children();
  }

  if (children && !isEmptyChildren(children)) {
    return React.Children.only(children);
  }

  if (render) {
    return render();
  }

  return null;
};

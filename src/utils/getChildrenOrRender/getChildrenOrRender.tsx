import * as React from 'react';

import isEmptyChildren from '../isEmptyChildren/isEmptyChildren';
import isFunction from '../isFunction/isFunction';

const getChildrenOrRender = (children?: any, render?: any) => {
  if (children) {
    if (isFunction(children)) {
      return React.Children.only(children());
    }

    if (!isEmptyChildren(children)) {
      return React.Children.only(children);
    }
  }

  if (render) {
    return React.Children.only(render());
  }

  return null;
};

export default getChildrenOrRender;

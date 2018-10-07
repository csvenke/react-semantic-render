import * as React from 'react';

import { TOutput, TRender } from '../../types';
import getRenderProp from '../getRenderProp';
import isEmptyChildren from '../isEmptyChildren';
import isFunction from '../isFunction';

const getChildrenOrRender = (children?: any, render?: any): TOutput => {
  const result = getRenderProp(children, render);

  if (result) {
    if (isFunction<TRender>(result)) {
      return result();
    }

    if (!isEmptyChildren(result) && React.isValidElement(result)) {
      return React.Children.only(result);
    }
  }

  return null;
};

export default getChildrenOrRender;

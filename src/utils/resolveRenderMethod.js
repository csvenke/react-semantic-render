import React from "react";

import isEmptyChildren from "./isEmptyChildren";
import isFunction from "./isFunction";
import isString from "./isString";

function resolveRenderMethod(method) {
  if (isFunction(method)) {
    return method.call();
  }

  if (!isEmptyChildren(method) && React.isValidElement(method)) {
    return React.Children.only(method);
  }

  if (isString(method)) {
    return method;
  }

  return null;
}

export default resolveRenderMethod;

import React from "react";

import isEmptyChildren from "./isEmptyChildren";
import isFunction from "./isFunction";

function resolveRenderMethod(method) {
  if (isFunction(method)) {
    return method.call();
  }

  if (!isEmptyChildren(method) && React.isValidElement(method)) {
    return React.Children.only(method);
  }

  return null;
}

export default resolveRenderMethod;

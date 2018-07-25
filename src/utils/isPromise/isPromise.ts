export const isPromise = (props: object, propName: string, componentName: string) => {
  if (props[propName]) {
    return props[propName] instanceof Promise
      ? null
      : new Error(`${propName} in ${componentName} is not a promise`);
  }
  return null;
};

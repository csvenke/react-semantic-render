import * as React from 'react';

const isElement = (child: any, element: any): child is React.ReactElement<{}> =>
  child.type.prototype === element.prototype;

export default isElement;

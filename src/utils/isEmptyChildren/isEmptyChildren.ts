import * as React from 'react';

const isEmptyChildren = (children: any) => React.Children.count(children) === 0;

export default isEmptyChildren;

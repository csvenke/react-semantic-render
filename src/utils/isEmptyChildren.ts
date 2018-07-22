import * as React from 'react';

export const isEmptyChildren = children => React.Children.count(children) === 0;

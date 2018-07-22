import * as React from 'react';

export interface IArrayMapProps {
  array: any[];
  render?: (value?: any, index?: number, array?: any[]) => React.ReactNode;
  children?: (value?: any, index?: number, array?: any[]) => React.ReactNode;
}

const ArrayMap: React.SFC<IArrayMapProps> = ({ array, render, children }) => {
  const func = children ? children : render;

  if (!func) {
    return null;
  }

  return <React.Fragment>{array.map((a, b, c) => func(a, b, c))}</React.Fragment>;
};

export default ArrayMap;

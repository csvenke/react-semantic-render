const getRenderProp = (children?: any, render?: any) => {
  const result = !!children ? children : render;
  return !!result ? result : null;
};

export default getRenderProp;

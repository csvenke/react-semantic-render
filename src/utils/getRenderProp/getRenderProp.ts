import renderIf from '../renderIf';

const getRenderProp = (children?: any, render?: any) => {
  const result = children ? children : render;
  return renderIf(!!result)(result);
};

export default getRenderProp;

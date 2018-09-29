import renderIf from '../renderIf/renderIf';

const getRenderProp = (children?: unknown, render?: unknown) => {
  const result = children ? children : render;
  return renderIf(!!result)(result);
};

export default getRenderProp;

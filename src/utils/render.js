import getRenderMethod from "./getRenderMethod";
import resolveRenderMethod from "./resolveRenderMethod";

function render(props) {
  const method = getRenderMethod(props.children, props.render);
  return resolveRenderMethod(method);
}

export default render;

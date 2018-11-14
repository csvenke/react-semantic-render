import { IRenderProps, renderPropsPropTypes, TOutput } from '../../types';
import { getChildrenOrRender } from '../../utils/';

/**
 * Helper component that is accessed from `Switch` component.
 */
function SwitchDefault(props: IRenderProps): TOutput {
  return getChildrenOrRender(props.children, props.render);
}

SwitchDefault.propTypes = renderPropsPropTypes;

export default SwitchDefault;

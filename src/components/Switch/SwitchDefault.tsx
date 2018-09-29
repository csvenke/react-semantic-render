import { IRenderProps, Output, renderPropsPropTypes } from '../../types';
import { getChildrenOrRender } from '../../utils/';

/**
 * Helper component that is accessed from `Switch` component.
 */
const SwitchDefault = (props: IRenderProps): Output => {
  const { children, render } = props;
  return getChildrenOrRender(children, render);
};

SwitchDefault.propTypes = renderPropsPropTypes;

export default SwitchDefault;

import { IRenderProps, renderPropsPropTypes, TOutput } from '../../types';
import { getChildrenOrRender } from '../../utils/';

/**
 * Helper component that is accessed from `Switch` component.
 */
const SwitchDefault = (props: IRenderProps): TOutput => {
  const { children, render } = props;
  return getChildrenOrRender(children, render);
};

SwitchDefault.propTypes = renderPropsPropTypes;

export default SwitchDefault;

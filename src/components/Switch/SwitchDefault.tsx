import { IRenderProps, renderPropsPropTypes } from '../../types';
import { getChildrenOrRender } from '../../utils/';

/**
 * Helper component that is accessed from `Switch` component.
 */
export const SwitchDefault: React.SFC<IRenderProps> = ({ render, children }) => {
  return getChildrenOrRender(children, render);
};

SwitchDefault.propTypes = renderPropsPropTypes;

export default SwitchDefault;

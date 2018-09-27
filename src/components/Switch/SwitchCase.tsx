import * as PropTypes from 'prop-types';

import { IRenderProps, renderPropsPropTypes } from '../../types';
import { getChildrenOrRender } from '../../utils/';

export interface ISwitchCaseProps extends IRenderProps {
  /** Conditional statement. */
  value: any;
}

/**
 * Helper component that is accessed from `Switch` component.
 */
export const SwitchCase: React.SFC<ISwitchCaseProps> = ({ children, render }) => {
  return getChildrenOrRender(children, render);
};

SwitchCase.propTypes = {
  value: PropTypes.any.isRequired,
  ...renderPropsPropTypes,
};

export default SwitchCase;

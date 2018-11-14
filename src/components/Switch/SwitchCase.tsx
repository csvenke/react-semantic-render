import * as PropTypes from 'prop-types';

import { IRenderProps, renderPropsPropTypes, TOutput } from '../../types';
import { getChildrenOrRender } from '../../utils/';

export interface ISwitchCaseProps extends IRenderProps {
  /** Conditional statement. */
  value: any;
}

/**
 * Helper component that is accessed from `Switch` component.
 */
function SwitchCase(props: ISwitchCaseProps): TOutput {
  return getChildrenOrRender(props.children, props.render);
}

SwitchCase.propTypes = {
  value: PropTypes.any.isRequired,
  ...renderPropsPropTypes,
};

export default SwitchCase;

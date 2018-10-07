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
const SwitchCase = (props: ISwitchCaseProps): TOutput => {
  const { children, render } = props;
  return getChildrenOrRender(children, render);
};

SwitchCase.propTypes = {
  value: PropTypes.any.isRequired,
  ...renderPropsPropTypes,
};

export default SwitchCase;

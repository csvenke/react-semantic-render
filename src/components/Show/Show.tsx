import * as PropTypes from 'prop-types';

import { IRenderProps, renderPropsPropTypes, TOutput } from '../../types';
import { getChildrenOrRender } from '../../utils';

interface IShowProps extends IRenderProps {
  /** Conditional statement.  */
  when: boolean;
}

/**
 * Renders content if `when` equals true.
 */
function Show(props: IShowProps): TOutput {
  return props.when ? getChildrenOrRender(props.children, props.render) : null;
}

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  ...renderPropsPropTypes,
};

export default Show;

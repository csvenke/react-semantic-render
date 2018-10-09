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
const Show = (props: IShowProps): TOutput => {
  const { when, children, render } = props;
  return when ? getChildrenOrRender(children, render) : null;
};

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  ...renderPropsPropTypes,
};

export default Show;

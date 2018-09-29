import * as PropTypes from 'prop-types';

import { IRenderProps, Output, renderPropsPropTypes } from '../../types';
import { getChildrenOrRender, renderIf } from '../../utils';

interface IShowProps extends IRenderProps {
  /** Conditional statement.  */
  when: boolean;
}

/**
 * Renders content if `when` equals true.
 */
const Show = (props: IShowProps): Output => {
  const { when, children, render } = props;
  return renderIf(when)(getChildrenOrRender(children, render));
};

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  ...renderPropsPropTypes,
};

export default Show;

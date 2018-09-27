import * as PropTypes from 'prop-types';

import { IRenderProps, renderPropsPropTypes } from '../../types';
import { getChildrenOrRender, renderIf } from '../../utils';

export interface IShowProps extends IRenderProps {
  /** Conditional statement.  */
  when: boolean;
}

/**
 * Renders content if `when` equals true.
 */
export const Show: React.SFC<IShowProps> = ({ when, children, render }) => {
  return renderIf(when)(getChildrenOrRender(children, render));
};

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  ...renderPropsPropTypes,
};

export default Show;

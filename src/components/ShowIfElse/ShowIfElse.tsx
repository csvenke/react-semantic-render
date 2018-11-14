import * as PropTypes from 'prop-types';
import * as React from 'react';

import { TOutput, TRender } from '../../types';
import Switch from '../Switch';

interface IShowIfElse {
  /** Conditional statement.  */
  condition: boolean;

  /** Renders when condition is true. */
  if: TRender;

  /** Renders when condition is false. */
  else: TRender;
}

/**
 * Renders content from if when condition equals true, else renders content from else.
 */
function ShowIfElse(props: IShowIfElse): TOutput {
  return (
    <Switch value={true}>
      <Switch.Case value={props.condition} render={props.if} />
      <Switch.Default render={props.else} />
    </Switch>
  );
}

ShowIfElse.propTypes = {
  condition: PropTypes.bool.isRequired,
  else: PropTypes.func.isRequired,
  if: PropTypes.func.isRequired,
};

export default ShowIfElse;

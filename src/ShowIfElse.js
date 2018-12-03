import React from 'react'
import PropTypes from 'prop-types'

import Switch from './Switch'

/**
 * Renders content from if when condition equals true, else renders content from else.
 */
function ShowIfElse (props) {
  return (
    <Switch value>
      <Switch.Case value={props.condition} render={props.if} />
      <Switch.Default render={props.else} />
    </Switch>
  )
}

ShowIfElse.propTypes = {
  condition: PropTypes.bool.isRequired,
  else: PropTypes.func.isRequired,
  if: PropTypes.func.isRequired
}

export default ShowIfElse

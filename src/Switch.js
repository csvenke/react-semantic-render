import React from 'react'
import PropTypes from 'prop-types'

import render from './internal/render'

/**
 * Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.
 */
function Switch (props) {
  let match = false
  let child

  React.Children.forEach(props.children, element => {
    if (match === false && React.isValidElement(element)) {
      const caseValue = element.props.value
      child = element
      match = caseValue === props.value
    }
  })

  // No match found, return default if it exists.
  if (!match && child.props.value === undefined) {
    return React.cloneElement(child)
  }

  // Return case if its a match.
  return match ? React.cloneElement(child) : null
}

Switch.Case = render

Switch.Default = render

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired
}

export default Switch

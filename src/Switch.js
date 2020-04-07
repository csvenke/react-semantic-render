import React from 'react'
import PropTypes from 'prop-types'

import render from './utils/render'

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

  if (!match && child.props.value === undefined) {
    return React.cloneElement(child)
  }

  return match ? React.cloneElement(child) : null
}

Switch.Case = render

Switch.Default = render

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired
}

export default Switch

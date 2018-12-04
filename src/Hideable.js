import React from 'react'

/**
 * Higher order component that injects 'hide' prop into specified component.
 */
function Hideable (WrappedComponent) {
  return props => !props.hide ? <WrappedComponent {...props} /> : null
}

export default Hideable

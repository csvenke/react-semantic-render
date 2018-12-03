import React from 'react'

/**
 * Higher order component that injects 'hide' prop into specified component.
 */
function Hideable (WrappedComponent) {
  return ({ hide, ...restProps }) =>
    !hide ? <WrappedComponent {...restProps} /> : null
}

export default Hideable

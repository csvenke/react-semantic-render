import React from 'react'

function Hideable (WrappedComponent) {
  return props => !props.hide ? <WrappedComponent {...props} /> : null
}

export default Hideable

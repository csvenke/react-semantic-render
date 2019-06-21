import React from 'react'

function isEmptyChildren (children) {
  return React.Children.count(children) === 0
}

export default isEmptyChildren

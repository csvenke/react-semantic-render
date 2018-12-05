import isFunction from './isFunction'

function getRenderMethod (children, render) {
  if (children) {
    return children
  }

  if (render && isFunction(render)) {
    return render
  }

  return null
}

export default getRenderMethod

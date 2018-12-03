import PropTypes from 'prop-types'

import render from './internal/render'

/**
 * Renders content if `when` equals true.
 */
function Show (props) {
  return props.when ? render(props) : null
}

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.node,
  render: PropTypes.func
}

export default Show

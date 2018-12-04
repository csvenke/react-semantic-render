import PropTypes from 'prop-types'

import getRenderMethod from './internal/getRenderMethod'

function List (props) {
  const method = getRenderMethod(props.children, props.render)
  return method ? props.items.map(method) : null
}

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func
}

export default List

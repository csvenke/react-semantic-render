import PropTypes from "prop-types";

import render from "./utils/render";

function Show(props) {
  return props.when ? render(props) : null;
}

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.node,
  render: PropTypes.func,
};

export default Show;

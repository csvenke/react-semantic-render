import * as PropTypes from 'prop-types';

export interface ICoreProps {
  /** Shorthand for primary content. */
  render?: () => React.ReactNode;

  /** Primary content. */
  children?: any;
}

export const corePropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
};

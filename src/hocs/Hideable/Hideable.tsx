import * as React from 'react';

interface IHideableProps {
  hideComponent: boolean;
}

/**
 * Higher order component that injects 'hideComponent' prop into specified component.
 */
const Hideable = <P extends object>(
  Component: React.ComponentType<P>,
): React.SFC<P & IHideableProps> => ({ hideComponent, ...props }: IHideableProps) =>
  !hideComponent ? <Component {...props} /> : null;

export default Hideable;

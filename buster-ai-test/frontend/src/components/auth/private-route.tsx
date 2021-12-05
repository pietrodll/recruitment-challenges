import * as React from 'react';
import {
  RouteComponentProps,
  RouteProps,
  Route,
  Redirect,
} from 'react-router-dom';

export interface PrivateComponentProps<
  P extends { [K in keyof P]?: string } = {}
> extends RouteComponentProps<P> {
  onLogout: () => void;
}

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<PrivateComponentProps<any>>;
  authenticated: boolean;
  onLogout: () => void;
  fallbackPath: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  authenticated,
  onLogout,
  fallbackPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        React.createElement(component || '', { ...props, onLogout })
      ) : (
        <Redirect
          to={{ pathname: fallbackPath, state: { from: props.location } }}
        />
      )
    }
  />
);

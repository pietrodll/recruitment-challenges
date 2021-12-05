import * as React from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

export interface LoginComponentProps<P extends { [K in keyof P]?: string } = {}>
  extends RouteComponentProps<P> {
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string) => void;
  errorMessage?: string;
}

interface LoginRouteProps extends RouteProps {
  component: React.ComponentType<LoginComponentProps<any>>;
  redirectionPath: string;
  authenticated: boolean;
  errorMessage?: string;
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string) => void;
}

export const LoginRoute: React.FC<LoginRouteProps> = ({
  component,
  redirectionPath,
  authenticated,
  onLogin,
  onSignup,
  errorMessage,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !authenticated ? (
        React.createElement(component || '', {
          ...props,
          onLogin,
          onSignup,
          errorMessage,
        })
      ) : (
        <Redirect to={redirectionPath} />
      )
    }
  />
);

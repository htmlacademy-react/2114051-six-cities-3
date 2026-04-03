import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  isAuthorized: boolean;
};

function PrivateRoute({ children, isAuthorized }: PrivateRouteProps) {
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

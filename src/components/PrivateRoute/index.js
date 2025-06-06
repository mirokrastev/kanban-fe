import { Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

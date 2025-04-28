import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PublicGuard = ({ element }) => {
  const { user } = useAuth();

  if (user !== null) {
    return <Navigate to="/boards" replace />;
  }

  return element;
};

export default PublicGuard;

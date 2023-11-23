import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAdmin({ children }) {
  const { authUser } = useAuth();

  if (authUser) {
    return <Navigate to="/admin/product" />;
  }
  return children;
}

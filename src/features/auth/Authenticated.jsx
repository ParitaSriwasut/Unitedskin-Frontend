import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function Authenticated({ children }) {
  const { authUser } = useAuth();

  if (!authUser && authUser) {
    return <Navigate to="/home" />;
  }
  return children;
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAdmin({ children }) {
  // It's not required following code was always redirect to admin/product : not sure to delete just keeping this code to avoid might be use in next project

  // const { authUser } = useAuth();

  // if (authUser) {
  //   return <Navigate to="/admin/product" />;
  // }
  return children;
}

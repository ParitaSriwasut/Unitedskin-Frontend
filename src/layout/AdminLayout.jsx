import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";

export default function AdminMainPage() {
  return (
    <div className="flex flex-col">
      <Dashboard />
      <Outlet />
    </div>
  );
}

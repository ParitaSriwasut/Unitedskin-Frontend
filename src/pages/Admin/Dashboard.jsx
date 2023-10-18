import { Outlet, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const Dashboard = () => {
  const { userId } = useParams();

  if (!userId.isAdmin) return <p>Access denied. Not an Admin!</p>;

  return (
    <div className="flex h-screen">
      <div className="border-r border-gray-300 h-[calc(100vh-70px)] fixed overflow-y-auto w-48 flex flex-col p-8">
        <h3 className="mb-4 uppercase text-sm">Quick Links</h3>
        <NavLink
          to="/admin/summary"
          activeClassName="text-blue-500"
          className="text-gray-600 text-sm mb-4"
        >
          Summary
        </NavLink>
        <NavLink
          to="/admin/products"
          activeClassName="text-blue-500"
          className="text-gray-600 text-sm mb-4"
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/orders"
          activeClassName="text-blue-500"
          className="text-gray-600 text-sm mb-4"
        >
          Orders
        </NavLink>
        <NavLink
          to="/admin/users"
          activeClassName="text-blue-500"
          className="text-gray-600 text-sm"
        >
          Users
        </NavLink>
      </div>
      <div className="ml-48 p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

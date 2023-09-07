import { FaBook, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4 ">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>


      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-900 text-white">
          <div className="flex mx-auto mb-8"> <img src="" alt="" /></div> <hr className="my-8" />
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaWallet /> All users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/OrderList">
                  <FaBook /> All Orders
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myorders">
                  <FaBook /> My Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/order">
                  <BiSolidMessageAltAdd /> New Order
                </NavLink>
              </li>
            </>
          )}



          <hr className="my-4" />
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>


          <li>
            <Link onClick={handleLogOut} >  Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

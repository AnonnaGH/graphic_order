import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}


  const navOptions = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/sample'>Design sample</Link></li>
  <li><Link to='/order'>Order</Link></li>
  <li><Link to='/aboutus'>About us</Link></li>
 
        <li><Link to="/dashboard/admin">Admin Dashboard</Link></li>
    
        <li><Link to="/dashboard">Dashboard</Link></li>
   
        
   
       
    
  
</>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Graphic Order</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
         
          {user?.email ? (
      <>
        <div className="avatar placeholder">
          <div className=" bg-neutral-focus text-neutral-content rounded-full w-8">
            <img
              src={user?.photoURL}
              title={user.displayName}
              alt="User image"
            />
          </div>
        </div>
        <button onClick={handleLogOut} className="btn bg-blue-400  border-0 ml-2">
          Logout
        </button>
      </>
    ) : (
      <>
        <button className="btn bg-blue-800   border-0 ml  hover:bg-blue-600 text-white font-bold hover:text-black">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn  bg-blue-800  text-white hover:bg-blue-600  border-0 ml-2  font-bold dark:hover:text-white hover:text-black">
          <Link to="/signup">Sign Up</Link>
        </button>
      </>
    )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

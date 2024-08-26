import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";

const PrivateRoute = ({ isAuthenticated }) => {
  useEffect(() => {
    console.log("Private route is working");
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

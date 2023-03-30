import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const PrivateRoute = () => {
  const { auth } = useAuth();

  if (auth.isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

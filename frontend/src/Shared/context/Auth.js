import React, { createContext, useContext } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(null);

export const ProviderAuth = ({ children }) => {
  const [auth, setAuthState] = React.useState({
    token: "",
    isAdmin: false,
    userName: "",
    userId: ""
  });

  const setAuth = auth => {
    const decoded = jwt_decode(auth.token);

    setAuthState({ ...auth, userId: decoded.id });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

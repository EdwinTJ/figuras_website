import React, { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const ProviderAuth = ({ children }) => {
  const [auth, setAuth] = React.useState({
    token: "",
    isAdmin: false
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

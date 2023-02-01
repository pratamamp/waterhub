import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "admin",
    pass: "admin",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/board";

  const signIn = async (newUser) => {
    const { email, pass } = newUser;

    try {
    } catch (error) {}
  };

  const signOut = async () => {};

  useEffect(() => {}, [user]);

  const contextValue = { signIn, signOut, user };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

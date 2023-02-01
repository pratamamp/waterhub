import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/authentification";
import BoardLayout from "./layout/BoardLayout";
import BoardHome from "./pages/board/Home";
import Search from "./pages/board/Search";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/Registerpage";

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="/board"
          element={
            <RequireAuth>
              <BoardLayout />
            </RequireAuth>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  console.log(auth);
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
const BaseLayout = () => {
  return <Outlet />;
};
export default App;

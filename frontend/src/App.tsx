import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import useUser from "./lib/userContext/useUser";
import AuthLayout from "./pages/Auth/AuthLayout";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import ProtectedRoute from "./lib/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import GymsHome from "./pages/Home/GymsHome/GymsHome";
import GymSignUp from "./pages/Auth/SignUp/GymSignUp";

function App() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  return (
    <div className="grid-container">
      <Routes>
        <Route path="*" element={<Home />}>
          <Route element={<AuthLayout />}>
            <Route index element={<SignUp />} />
            <Route path="logIn" element={<SignIn />} />
            <Route path="signUp/gym" element={<GymSignUp/>}/>
          </Route>
          <Route path="gyms" element={<GymsHome />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

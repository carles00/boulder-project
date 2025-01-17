import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import ProtectedRoute from "./lib/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import HomeLayout from "./pages/Home/HomeLayout";
import { useEffect } from "react";
import GymsHome from "./pages/Home/GymsHome/GymsHome";
import { useAuth0 } from "@auth0/auth0-react";
import UserProvider from "./lib/userContext/userProvider";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate(); 
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  if(isLoading){
    return <div>Loading User...</div>
  }

  return (
    <div className="grid-container">
      <Routes>
        <Route path="*" element={<HomeLayout />}>
          <Route path="gyms" element={<GymsHome />} />
        </Route>
        <Route element={<UserProvider/>}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

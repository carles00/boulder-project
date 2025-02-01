import { Route, Routes, useNavigate } from "react-router";
import Feed from "./pages/Feed/Feed";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProvider from "./lib/userContext/userProvider";
import LandingPage from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/feed");
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading User...</div>;
  }

  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route element={<UserProvider />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Feed from "./pages/Feed/Feed";
import LandingPage from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./pages/Auth/AuthLayout";
import LoginForm from "./pages/Auth/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginForm />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

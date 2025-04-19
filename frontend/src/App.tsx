import { Route, Routes } from "react-router";
import Feed from "./pages/Feed/Feed";
import LandingPage from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./pages/Auth/AuthLayout";
import SignUpForm from "./pages/Auth/SignUpForm";

function App() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUpForm />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthService from "./utils/AuthService";
import useDidMountEffect from "./hooks/useDidMountEffect";
const App = () => {
  const storedProfile = localStorage.getItem("userProfile");
  const initialProfile = storedProfile ? JSON.parse(storedProfile) : [];
  const initialLoggedIn = storedProfile ? true : false;
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(initialProfile);
  useDidMountEffect(() => {
    if (user) {
      const auth = {
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        profile,
        setProfile,
      };
      toast.promise(AuthService.getUserInfo(auth), {
        loading: "Logging in...",
        success: <b>Logged in!</b>,
        error: <b>Could not Login.</b>,
      });
    }
  }, [user]);
  const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Toaster></Toaster>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                auth={{
                  loggedIn,
                  setLoggedIn,
                  user,
                  setUser,
                  profile,
                  setProfile,
                }}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

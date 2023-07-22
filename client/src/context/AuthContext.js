import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import useDidMountEffect from "../hooks/useDidMountEffect";
import axios from "../utils/axios";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  //get saved user session from local storage
  const storedProfile = localStorage.getItem("userProfile");
  const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;
  const initialLoggedIn = storedProfile ? true : false;

  //states to keep track of user info and login state
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(initialProfile);

  //get user profile and set to localstorage
  const getUserInfo = () => {
    const userInfoAPIUrl = process.env.REACT_APP_USERINFO_API_URL;
    return new Promise((resolve, reject) => {
      axios
        .get(`${userInfoAPIUrl}${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then(({ data }) => {
          axios
            .post("/api/auth/google", data)
            .then(({ data }) => {
              resolve();
              console.log(data);
              setUserProfile(data);

              localStorage.setItem("userProfile", JSON.stringify(data));
              setIsLoggedIn(true);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => reject());
    });
  };

  // dont run on initial render
  useDidMountEffect(() => {
    toast.promise(getUserInfo(), {
      loading: "Logging in...",
      success: <b>Logged in!</b>,
      error: <b>Could not Login.</b>,
    });
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logout = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setIsLoggedIn(false);
        setUserProfile(null);
        localStorage.removeItem("userProfile");
        googleLogout();
        resolve();
      }),
      {
        loading: "Logging out...",
        success: <b>Logged out!</b>,
        error: <b>Could not Logout.</b>,
      }
    );
  };

  const authContextValue = {
    isLoggedIn,
    userProfile,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

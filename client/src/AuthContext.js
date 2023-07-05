import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import useDidMountEffect from "./hooks/useDidMountEffect";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const storedProfile = localStorage.getItem("userProfile");
  const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;
  const initialLoggedIn = storedProfile ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(initialProfile);

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
        .then((res) => {
          resolve(res.data);
          console.log(res.data);
          setUserProfile(res.data);
          localStorage.setItem("userProfile", JSON.stringify(res.data));
          setIsLoggedIn(true);
        })
        .catch(() => reject());
    });
  };

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

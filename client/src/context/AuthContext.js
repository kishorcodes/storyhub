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
    const accessToken = user.access_token;
    const userInfoAPIUrl = `${process.env.REACT_APP_USERINFO_API_URL}${accessToken}`;
    return new Promise(async (resolve, reject) => {
      try {
        const userInfoResponse = await axios.get(userInfoAPIUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userProfile = userInfoResponse.data;

        const loginResponse = await axios.post("/api/auth/google", userProfile);
        const data = loginResponse.data;

        // Set user profile, update local storage, and set logged in status
        setUserProfile(data);
        localStorage.setItem("userProfile", JSON.stringify(data));
        setIsLoggedIn(true);
        resolve();
      } catch (error) {
        reject(error);
      }
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

import axios from "axios";
const getUserInfo = (auth) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${auth.user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${auth.user.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        const userData = res.data;
        auth.setProfile(userData);
        auth.setLoggedIn(true);
        localStorage.setItem("userProfile", JSON.stringify(userData));
        resolve();
      })
      .catch((err) => reject());
  });
};


const AuthService = {getUserInfo}

export default AuthService ;

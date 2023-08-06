import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useHandleNavigationClick = () => {
  const { isLoggedIn, userProfile } = useContext(AuthContext);
  const userId = userProfile?._id;
  const navigate = useNavigate();

  const handleNavigationClick = (href) => {
    if (href === "/stories")
      navigate(href, {
        state: { title: "Discover Stories", apiUrl: "/api/stories/all" },
      });
    else if (href === "/bookmarks") {
      if (!isLoggedIn) {
        toast.error("You must be logged in");
      } else {
        navigate(href, {
          state: {
            title: "Your Bookmarks",
            apiUrl: `/api/bookmarks/${userId}`,
          },
        });
      }
    } else if (href === "/write") {
      if (!isLoggedIn) {
        toast.error("You must be logged in");
      } else {
        navigate(href);
      }
    }
  };

  return handleNavigationClick;
};

export default useHandleNavigationClick;

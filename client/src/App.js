import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import Write from "./pages/Write";
import About from "./pages/About";
const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <Toaster />
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/write" element={<Write />}></Route>
              <Route path="/stories/:id" element={<Story />}></Route>
              <Route path="/stories" element={<Stories />}></Route>
              <Route path="/user/:userId" element={<Stories />}></Route>
              <Route path="/category/:category" element={<Stories />}></Route>
              <Route path="/bookmarks" element={<Stories />}></Route>
              <Route path="/about" element={<About />}></Route>
           
            </Routes>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;

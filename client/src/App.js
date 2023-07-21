import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Write from "./pages/Write";
import Stories from "./pages/Stories";
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
            </Routes>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;

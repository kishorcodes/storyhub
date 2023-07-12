import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Write from "./pages/Write";

const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <Toaster></Toaster>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/write" element={<Write />}></Route>
              <Route exact path="/stories/:id" element={<Story />}></Route>
            </Routes>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;

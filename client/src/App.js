import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Write from "./components/Write";
import Home from "./pages/Home";
import Story from "./pages/Story";
import { AuthProvider } from "./AuthContext";
const App = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <Toaster></Toaster>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/write" element={<Write />}></Route>
            <Route exact path="/about" element={<Story/>}></Route>

          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;

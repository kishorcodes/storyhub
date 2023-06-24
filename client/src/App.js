import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
const App = () => {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home auth={{loggedIn,setLoggedIn}} />}></Route>
        </Routes>
      </Router>
  );
};

export default App;

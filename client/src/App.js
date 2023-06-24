import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Nav from "./pages/Nav";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

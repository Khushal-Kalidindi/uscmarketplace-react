import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Nav from "./pages/Nav";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import SignupPage from "./pages/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

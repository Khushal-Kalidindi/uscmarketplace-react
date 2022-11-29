import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Nav from "./pages/Nav";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import SignupPage from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import DetailsPage from "./pages/Details";

function App() {
  return (
    <AuthProvider>
<<<<<<< Updated upstream
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
=======
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
>>>>>>> Stashed changes
    </AuthProvider>
  );
}

export default App;

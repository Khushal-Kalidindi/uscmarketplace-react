import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Nav from './pages/Nav';
import LoginPage from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

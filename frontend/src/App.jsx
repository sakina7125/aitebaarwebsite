import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import Wallet from './pages/Wallet/Wallet';
function App() {
  return (
    <Router>
    
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* Temporarily remove the Info route since we haven't created it yet */}
          {/* <Route path="/info" element={<Info/>} /> */}
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
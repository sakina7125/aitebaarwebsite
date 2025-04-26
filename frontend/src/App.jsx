import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Temporarily remove the Info route since we haven't created it yet */}
          {/* <Route path="/info" element={<Info/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
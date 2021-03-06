import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<><Header/><Home/></>} />
          <Route exact path="/checkout" element={<><Header/><Home/></>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

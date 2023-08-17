import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import NavBAr from './components/layouts/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import TopBrands from './components/TopBrands';
import Women from './components/Women';
import Contact from './components/Contact';
import Men from './components/Men';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
    <NavBAr />
    <Header />
    <Routes>
    <Route path="/" element={<Home/>}>
    </Route>
    <Route path="/about" element={<About/>}>
    </Route>
    <Route path="/contact-us" element={<Contact/>}>
    </Route>
    <Route path="/topbrands" element={<TopBrands/>}>
    </Route>
    <Route path="/women" element={<Women/>}>
    </Route>
    <Route path="/men" element={<Men/>}>
    </Route>
   
    </Routes>
    </Router>
    
  );
} 

export default App;

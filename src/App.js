import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/home/Home';



function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

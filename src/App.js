import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Properties from './pages/properties/Properties';



function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

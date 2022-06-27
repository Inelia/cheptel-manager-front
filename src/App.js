import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.js';
import Account from './pages/Account.js';
import Login from './pages/Login.js';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
// import LoginForm from './pages/LoginForm.js';
// import { Search } from 'react-router-dom';
// import SearchPage from './pages/Search.js';
// import PersonDetails from './pages/PersonDetails.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/search/:input" element={<Search />} /> */}
          {/* <Route path="/*" element={<Home />} /> */}
          {/* <Route path="/persons/:id" element={<PersonDetails />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

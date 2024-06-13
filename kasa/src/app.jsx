import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import FicheLogement from './pages/Logement/ficheLogement'
import Header from './components/Header/header'
import Error from './components/Error/error'
import Footer from './components/Footer/footer'
import './styles/app.scss'

function App() {
    return (
        <React.StrictMode>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
              <Route path="/logement/:id" element={<FicheLogement />} />
            </Routes>
          </Router>
          <Footer />
        </React.StrictMode>
    );
}

export default App;

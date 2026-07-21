import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App

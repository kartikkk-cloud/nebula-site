import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header.jsx'

import './App.css'

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "80vh", background: "linear-gradient(#8e2de2, #c94b4b)" }}>
        {/* Demo content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

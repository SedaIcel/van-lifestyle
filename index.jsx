import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/" className="navbar-title">#VANLIFE</Link>
            <div className ="navbar-links">
                <Link to='/about'>About</Link>
                <Link to='/vans'>Vans</Link>
            </div>
        
        </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />

      </Routes>
    
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
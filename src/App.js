import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './index.css';
import Experiences from './components/Experiences';

function App() {
    return (
       <div className="container">
           <Nav/>
           <Hero/>
           <Experiences/>
       </div>
    )
}

export default App;
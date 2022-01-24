import React from 'react';
import './App.css';
import Problem1 from './Components/First/Problem1';
import Problem4 from './Components/Fourth/Problem4';
import Headernav from './Components/Header/header';
import About from './Components/Intro/About';
import Introduction from './Components/Intro/Introduction';
import Problem2 from './Components/Second/Problem2';




function App() {
  return (
    <div className="App">
      <Headernav />
      <Introduction/>
      <main id="main">
        <About/>
        <div>
        <Problem1/>
        <Problem2/>
 
        <Problem4/>
        </div>
  </main>

    </div>
  );
}

export default App;

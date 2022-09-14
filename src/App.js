import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Landing />
      <About />
      <Experience />
    </>
  );
}

export default App;

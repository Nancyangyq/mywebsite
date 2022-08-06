import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Error from './pages/Error';

import { Routes,Route } from 'react-router-dom';

import './styles/styles.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './header/Header';
import Nav from './nav/Nav';
import Profile from './content/Profile';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Nav/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
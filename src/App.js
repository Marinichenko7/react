import React from 'react';
import './App.css';
import Header from './header/header';
import Nav from './nav/nav';
import UserPage from './content/user_page';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Nav/>
      <UserPage/>
      <Footer/>
    </div>
  );
}

export default App;
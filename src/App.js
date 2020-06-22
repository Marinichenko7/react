import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <header className="header">
          <Header />
        </header>

        <nav className="nav">
          <Nav />
        </nav>

        <div className="content">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
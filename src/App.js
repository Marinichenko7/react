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
          <Route path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
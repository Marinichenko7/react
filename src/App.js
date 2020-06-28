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

const App = (props) => {


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
          <Route path="/profile" render={() => <Profile posts={props.appState.profilePage.PostsData} />} />
          <Route exact path="/dialogs" render={() => <Dialogs dialogs={props.appState.messagePage.DialogsData} messages={props.appState.messagePage.MessagesData} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
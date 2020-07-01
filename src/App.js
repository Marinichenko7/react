import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
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
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <nav className="nav">
        <Nav />
      </nav>
      <div className="content">

        <Route path="/profile" render={() => <Profile PostsData={props.appState.profilePage.PostsData}
                                                      addPost={props.addPost}
                                                      eventPost={props.eventPost} />} />
                                                      
        <Route exact path="/dialogs" render={() => <Dialogs dialogData={props.appState.messagePage.DialogsData}
                                                            messageData={props.appState.messagePage.MessagesData}
                                                            addMessage={props.addMessage}
                                                            eventMessage={props.eventMessage} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
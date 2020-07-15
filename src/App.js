import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Footer from './Components/Footer/Footer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';

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

        {/*<Route path="/profile" render={() => <Profile postsData={props.state.profilePage.postsData}
                                                      dispatch={props.dispatch} />} />*/}
        <Route path="/profile" render={() => <ProfileContainer />} />

        {/*<Route exact path="/dialogs" render={() => <Dialogs dialogsData={props.state.messagePage.dialogsData}
                                                            messagesData={props.state.messagePage.messagesData}
                                                    dispatch={props.dispatch} />} />*/}

        <Route exact path="/dialogs" render={() => <DialogsContainer  />} />

        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
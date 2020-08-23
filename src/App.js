import React from 'react';
import './App.css';
import { Route, Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { isAuthMe } from "./redux/authReducer";
import { inicializeThunk } from "./redux/appReducer";
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Footer from './Components/Footer/Footer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import LoginContainer from "./Components/Login/LoginContainer";
import Preloder from './Components/SideEffects/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.inicializeThunk()
    }


    render() {
        if (!this.props.inicializedApp) {
            
            return <Preloder />
        }

        return (
            <div className="wrapper">
                <header className="header">
                    <HeaderContainer />
                </header>
                <nav className="nav">
                    <Nav />
                </nav>
                <div className="content">
                    {/* <Route axact path="/" render={() =>
                        !this.props.isAuth ? <Redirect to="/login" /> : null
                    } /> */}
                    <Route path="/login" render={() => <LoginContainer />} />
                    <Route path="/profile/:user_id?" render={() => <ProfileContainer />} />
                    <Route exact path="/dialogs" render={() => <DialogsContainer />} />
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
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        inicializedApp: state.app.inicializedApp
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { inicializeThunk })
)(App)
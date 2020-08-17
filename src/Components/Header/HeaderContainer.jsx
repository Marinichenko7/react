import React from 'react';
import Header from './Header';
import { authUser, authDoneUser, authUserThunk } from '../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.authUserThunk()
        }, 1500)
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        authDone: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { authUser, authDoneUser, authUserThunk })(HeaderContainer)

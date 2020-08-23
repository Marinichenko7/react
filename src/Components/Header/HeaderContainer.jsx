import React from 'react';
import Header from './Header';
import { authUser, authDoneUser, authUserThunk, logOutMe } from '../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

    componentDidMount() {
        ///this.props.authUserThunk()
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logOutMe })(HeaderContainer)

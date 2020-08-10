import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { authUser, authDoneUser } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            axios.post(`https://reqres.in/api/login`, {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
                .then(responce => {
                    
                    if (responce.status === 200) {
                        this.props.authUser(responce.data.token)
                        this.props.authDoneUser(true)
                    }
                })
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
        token_user: state.auth.token_user,
        authDone: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { authUser, authDoneUser })(HeaderContainer)

import React from "react"
import Login from "./Login"
import { authUserThunk } from "../../redux/authReducer";
import { compose } from "redux"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component{

    render() {
        if(this.props.isAuth) return <Redirect to="/profile" />
        return(
            <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {authUserThunk})
)(LoginContainer)
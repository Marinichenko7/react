import React from 'react';
import Users from './Users';
import { followAction, unfollowAction, getUsersAction } from '../../redux/usersReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followAction(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowAction(id));
        },
        setUser: (users) => {
            dispatch(getUsersAction(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
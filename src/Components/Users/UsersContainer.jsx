import React from 'react';
import { followUser, unfollowUser, getUserData, clearUserData, showMoreUsers, togglePreloder } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class ContainerUsers extends React.Component {
    componentDidMount() {
        this.props.togglePreloder(true)
        this.props.clearUserData();
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users?page=1`)
                .then(responce => {
                    this.props.getUserData(responce.data)
                    this.props.togglePreloder(false)
                });
        }, 700)
    }
    onChangePage = (page) => {
        this.props.togglePreloder(true)
        this.props.clearUserData();
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users?page=${page}`)
                .then(responce => {
                    this.props.getUserData(responce.data)
                    this.props.togglePreloder(false)
                });
        }, 700)
    }
    onShowMoreUsers = (page) => {
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users?page=${page}`)
                .then(responce => {
                    this.props.showMoreUsers(responce.data)

                });
        }, 700)
    }
    render() {
        return (
            <Users users = {this.props.users}
                    page = {this.props.page}
                    per_page = {this.props.per_page}
                    total = {this.props.total}
                    total_pages = {this.props.total_pages}
                    onChangePage = {this.onChangePage}
                    onShowMoreUsers = {this.onShowMoreUsers}
                    toggleFetch = {this.props.toggleFetch}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        per_page: state.usersPage.per_page,
        total: state.usersPage.total,
        total_pages: state.usersPage.total_pages,
        toggleFetch: state.usersPage.toggleFetch
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (data) => {
            dispatch(getUsersDataAction(data));
        },
        showMoreUsers: (data) => {
            dispatch(showMoreUsersAction(data));
        },
        clearUserData: () => {
            dispatch(clearUsersDataAction());
        },
        togglePreloder: (toggle) => {
            dispatch(togglePreloderAction(toggle));
        },
        followUser: (id) => {
            dispatch(followAction(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowAction(id));
        }
    }
}
*/

const UsersContainer = connect(mapStateToProps,
    {
    getUserData,
    showMoreUsers,
    clearUserData,
    togglePreloder,
    followUser,
    unfollowUser
    }
)(ContainerUsers);

export default UsersContainer;
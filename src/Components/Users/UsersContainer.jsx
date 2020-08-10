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
            axios.get(`http://localhost:8000/usersData`)
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
            <Users {...this.props}
                onChangePage = {this.onChangePage}
                onShowMoreUsers = {this.onShowMoreUsers}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page_count: state.usersPage.page_count,
        toggleFetch: state.usersPage.toggleFetch
    }
}

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
import React from 'react';
import { followUser, unfollowUser, getUserData, clearUserData, showMoreUsers, togglePreloder, disableBtn } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import { UsersAPI } from '../../api/api';

class ContainerUsers extends React.Component {
    componentDidMount() {
        this.props.togglePreloder(true)
        this.props.clearUserData();

        UsersAPI.getAllUsers().then(data => {
            this.props.getUserData(data)
            this.props.togglePreloder(false)
        });

    }
    onChangePage = (page) => {
        this.props.togglePreloder(true)
        this.props.clearUserData();

        UsersAPI.getUsersPage(page)
            .then(data => {
                this.props.getUserData(data)
                this.props.togglePreloder(false)
            });

    }
    render() {
        return (
            <Users {...this.props}
                onChangePage={this.onChangePage}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page_count: state.usersPage.page_count,
        toggleFetch: state.usersPage.toggleFetch,
        toggleBtn: state.usersPage.toggleBtn
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        getUserData,
        showMoreUsers,
        clearUserData,
        togglePreloder,
        followUser,
        unfollowUser,
        disableBtn
    }
)(ContainerUsers);

export default UsersContainer;
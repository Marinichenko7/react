import React from 'react';
import { follow, unfollow, getUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';

class ContainerUsers extends React.Component {
    componentDidMount() {
        this.props.getUsers(1)

    }
    onChangePage = (page) => {
        this.props.getUsers(page)
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

/*let mapDispatchToProps = (dispatch) => {
    return{
        getUsersData: (data) => {
            dispatch(getUserData(data))
        },
        showMoreUsers: (data) => {
            dispatch(showMoreUsers(data))
        },
        clearUserData: () => {
            dispatch(clearUserData())
        },
        togglePreloder: (bool) => {
            dispatch(togglePreloder(bool))
        },
        followUser: (id) => {
            dispatch(followUser(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowUser(id))
        },
        disableBtn: (bool, id) => {
            dispatch(disableBtn(bool, id))
        }
    }
}*/

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        getUsers
    }
)(ContainerUsers);

export default UsersContainer;
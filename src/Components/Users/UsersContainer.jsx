import React from 'react';
import { followAction, unfollowAction, getUsersDataAction } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class ContainerUsers extends React.Component {

    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=1`)
            .then(responce => {
                this.props.getUserData(responce.data)
            });
    }
    onChangePage = (page) => {
        axios.get(`https://reqres.in/api/users?page=${page}`)
            .then(responce => {
                this.props.getUserData(responce.data)
            });
    }
    render() {
        return (
            <Users data={this.props.data} onChangePage={this.onChangePage} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.usersPage.data
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (data) => {
            dispatch(getUsersDataAction(data));
        },
        followUser: (id) => {
            dispatch(followAction(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowAction(id));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(ContainerUsers);

export default UsersContainer;
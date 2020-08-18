import React from 'react';
import { follow, unfollow, getUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
        toggleBtn: state.usersPage.toggleBtn,
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, getUsers }),
    withAuthRedirect
)(ContainerUsers)
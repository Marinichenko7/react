import React from "react";
import st from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        actionStatus: this.props.status,
        beforeStatus: this.props.status
    }

    activateEditMod = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMod = () => {
        this.setState({
            editMode: false
        })
        if (this.state.actionStatus !== this.state.beforeStatus) {
            this.props.changeStatus(this.props.id_user, this.state.actionStatus)
        }
    }
    getStatus = (e) => {
        this.state.actionStatus = e.target.value
    }

    render() {
        return (
            !this.state.editMode
                ? <div onClick={this.activateEditMod} className={st.status_text}>{this.state.actionStatus}</div>
                : <input onChange={this.getStatus} autoFocus onBlur={this.deactivateEditMod} type='text' className={st.status_done} defaultValue={this.state.actionStatus} />
        )
    }
}

export default ProfileStatus;
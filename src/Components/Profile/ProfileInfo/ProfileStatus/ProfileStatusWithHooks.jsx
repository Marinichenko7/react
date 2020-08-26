import React, { useState, useEffect, useDebugValue } from "react";
import st from "./ProfileStatus.module.scss";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus("test text")
    }, [status])

    const activateEditMod = () => {
        setEditMode(true)
    }
    const deactivateEditMod = () => {
        setEditMode(false)
        props.changeStatus(props.id_user, status)
    }
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        !editMode
            ? <div onClick={activateEditMod} className={st.status_text}>{status}</div>
            : <input onChange={changeStatus} autoFocus onBlur={deactivateEditMod} type='text' className={st.status_done} value={status} />
    )

}

export default ProfileStatusWithHooks;
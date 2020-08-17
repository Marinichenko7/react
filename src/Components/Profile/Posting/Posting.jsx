import React from 'react';
import st from "./Posting.module.css";

const Posting = (props) => {

    let inputValue = React.createRef();

    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>
            <input disabled={props.disabledPosting} onChange={

                (e) => props.changePost(e.target.value)

            } ref={inputValue} className={st.user_write_news} type="text" value={props.newPost}></input>

            <button disabled={props.disabledPosting} onClick={() => {

                props.addPost(props.newPost)

            }} className={st.send_news} type="button">Send</button>
        </div>

    )
}

export default Posting;
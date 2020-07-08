import React from 'react';
import st from "./Posting.module.css";


const Posting = (props) => {
    
    let inputValue = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    }

    let onChangePost = () => {
        let value = inputValue.current.value;
        props.changePost(value);
    }
    
    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>
            <input onChange={onChangePost} ref={inputValue} className={st.user_write_news} type="text" value={props.newPost}></input>
            <button onClick={onAddPost} className={st.send_news} type="button">Send</button>
        </div>

    )
}

export default Posting;
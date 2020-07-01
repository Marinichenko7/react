import React from 'react';
import st from "./Posting.module.css";

const Posting = (props) => {
    
    let inputVal = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch({ type: "ADD-POST" });
    }

    let changePost = () => {
        let valueInput = inputVal.current.value;
        //props.eventPost(valueInput);
        props.dispatch({ type: "UPDATE-TEXT-NEW-POST", text: valueInput });
    }

    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>
            <input onChange={changePost} ref={inputVal} className={st.user_write_news} type="text" value={props.newPost}></input>
            <button onClick={addPost} className={st.send_news} type="button">Send</button>
        </div>

    )
}

export default Posting;
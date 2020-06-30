import React from 'react';
import st from "./Posting.module.css";

const Posting = (props) => {
    
    let inputVal = React.createRef();

    let addPost = () => {
        
        let valueInput = inputVal.current.value;
        props.addPost(valueInput);
        inputVal.current.value = '';
    }

    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>
            <input ref={inputVal} className={st.user_write_news} type="textarea" name="user-news" placeholder="your news..."></input>
            <button onClick={addPost} className={st.send_news} type="button">Send</button>
        </div>

    )
}

export default Posting;
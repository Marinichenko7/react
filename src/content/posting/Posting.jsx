import React from 'react';
import st from "./Posting.module.css";

const Posting = () => {
    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>
            <input className={st.user_write_news} type="textarea" name="user-news" placeholder="your news..."></input>
            <input className={st.send_news} type="button" value="Send"></input>
        </div>

    )
}

export default Posting;
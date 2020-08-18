import React from 'react';
import st from "./Post.module.css";

const Posts = (props) => {
    return (
        <div>
            <div className={st.posted_news}>
                <div className={st.news_item}>
                    <img className={st.news_item_pic} src={props.avatar}></img>
                    <div className={st.news_item_text}>{props.message}</div>
                    <div className={st.news_item_date}>{props.date}</div>
                </div>
                <div className={st.operation_post}>
                    <input disabled={props.disabledLiking.some( id => id === props.id )} style={props.disabledLiking.some( id => id === props.id) ? {"backgroundColor": "grey"}: null} onClick={ () => {
                        
                        props.likePost(props.id, props.like_count, props.id_user)
                        props.likeToHistory(props.id)
                        
                    }} className={st.like_post} type="button" value={`like ${props.like_count}`}></input>
                    <input className={st.share_post} type="button" value={`share ${props.share_count}`}></input>
                </div>
            </div>
            
        </div>
    )
}

export default Posts;
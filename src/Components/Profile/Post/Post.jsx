import React from 'react';
import st from "./Post.module.css";

const Posts = (props) => {
    return (
        <div>
            <div className={st.posted_news}>
                <div className={st.news_item}>
                    <img className={st.news_item_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                    <div className={st.news_item_text}>{props.message}</div>
                    <div className={st.news_item_date}>{props.date}</div>
                </div>
                <div className={st.operation_post}>
                    <input className={st.like_post} type="button" value={`like ${props.like_count}`}></input>
                    <input className={st.share_post} type="button" value={`share ${props.share_count}`}></input>
                </div>
            </div>
            
        </div>
    )
}

export default Posts;
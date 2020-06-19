import React from 'react';
import st from './Profile.module.css';

const Profile = () => {
    return (
        <div className={st.profile}>
            <div className={st.background_user}>
                <img src="https://img5.goodfon.ru/wallpaper/big/3/94/mmmmmm-n-nnnnnnnn-bbbbbbbbb-vvvvvvvv-cccccccccccccccc.jpg"></img>
            </div>
            <div className={st.user_info}>
                <div className={st.user_pic_block}>
                    <img className={st.user_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                </div>
                <div className={st.user_describe}>
                    <div className={st.user_name}>Valentin Dikiy</div>
                    <div className={st.user_born}>Date of birth: 2 january</div>
                    <div className={st.user_city}>City: Kharkov</div>
                    <div className={st.user_education}>Education: ESU 11</div>
                    <div className={st.user_web_site}>Web-site: Vkontakte.com</div>
                </div>
            </div>
            <div className={st.user_posts}>
                <div className={st.user_add_post}>
                    <div className={st.name_block}>My posts</div>
                    <input className={st.user_curent_news} type="textarea" name="user-news" placeholder="your news..."></input>
                    <input className={st.send_news} type="button" value="Send"></input>
                </div>
                <div className={st.user_news_done}>
                    <div className={st.user_news_item}>
                        <div className={st.user_news_pic_block}>
                            <img className={st.user_news_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className={st.user_news_text}>My news, to day it is very cool!!)</div>
                        <div className={st.user_news_date}>15 feb 15:33</div>
                    </div>
                </div>
                <div className={st.user_news_done}>
                    <div className={st.user_news_item}>
                        <div className={st.user_news_pic_block}>
                            <img className={st.user_news_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className={st.user_news_text}>My news, to day it is very cool!!)</div>
                        <div className={st.user_news_date}>15 feb 15:33</div>
                    </div>
                </div>
                <div className={st.user_news_done}>
                    <div className={st.user_news_item}>
                        <div className={st.user_news_pic_block}>
                            <img className={st.user_news_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className={st.user_news_text}>My news, to day it is very cool!!)</div>
                        <div className={st.user_news_date}>15 feb 15:33</div>
                    </div>
                </div>
                <div className={st.user_news_done}>
                    <div className={st.user_news_item}>
                        <div className={st.user_news_pic_block}>
                            <img className={st.user_news_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className={st.user_news_text}>My news, to day it is very cool!!)</div>
                        <div className={st.user_news_date}>15 feb 15:33</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
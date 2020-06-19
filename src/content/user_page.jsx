import React from 'react';
import '../App.css';

const User_Page = () => {
    return (
        <div className="user-page">
            <div className="background-user">
                <img src="https://img5.goodfon.ru/wallpaper/big/3/94/mmmmmm-n-nnnnnnnn-bbbbbbbbb-vvvvvvvv-cccccccccccccccc.jpg"></img>
            </div>
            <div className="user-info">
                <div className="user-pic-block">
                    <img className="user-pic" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                </div>
                <div className="user-describe">
                    <div className="user-name">Valentin Dikiy</div>
                    <div className="user-born">Date of birth: 2 january</div>
                    <div className="user-city">City: Kharkov</div>
                    <div className="user-education">Education: ESU 11</div>
                    <div className="user-web-site">Web-site: Vkontakte.com</div>
                </div>
            </div>
            <div className="user-posts">
                <div className="user-add-post">
                    <div className="name-block">My posts</div>
                    <input className="user-curent-news" type="textarea" name="user-news" placeholder="your news..."></input>
                    <input className="send-news" type="button" value="Send"></input>
                </div>
                <div className="user-news-done">
                    <div className="user-news-item">
                        <div className="user-news-pic-block">
                            <img className="user-news-pic" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className="user-news-text">My news, to day it is very cool!!)</div>
                        <div className="user-news-date">15 feb 15:33</div>
                    </div>
                </div>
                <div className="user-news-done">
                    <div className="user-news-item">
                        <div className="user-news-pic-block">
                            <img className="user-news-pic" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className="user-news-text">My news, to day it is very cool!!)</div>
                        <div className="user-news-date">15 feb 15:33</div>
                    </div>
                </div>
                <div className="user-news-done">
                    <div className="user-news-item">
                        <div className="user-news-pic-block">
                            <img className="user-news-pic" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                        </div>
                        <div className="user-news-text">My news, to day it is very cool!!)</div>
                        <div className="user-news-date">15 feb 15:33</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Page;
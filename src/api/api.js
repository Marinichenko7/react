import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
})

export const UsersAPI = {
    getAllUsers(page) {
        return (
            instance.get(`users?_page=${page}`)
                .then(responce => {
                    return responce.data

                })
        )
    },
    followUser(id) {
        return (
            instance.patch(`users/${id}`, { "following": true })
        )
    },
    unfollowUser(id) {
        return (
            instance.patch(`users/${id}`, { "following": false })
        )
    },
    getUser(id) {
        return (
            instance.get(`users/${id ? id : "1"}`)
        )
    }
}
export const ProfileAPI = {
    changeUserStatus(id, status) {
        return (
            instance.patch(`users/${id}`, { status: status })
        )
    }
}
export const PostsAPI = {
    getPosts() {
        return (
            instance.get(`posts`)
        )
    },
    addPost(text) {
        let dateAction = new Date().toLocaleString();

        return (
            instance.post(`posts`, { message: text, date: dateAction, like_count: 0, share_count: 0, likes: [] })
        )
    },
    likePost(id_post, like, id_user) {
        return (
            instance.patch(`posts/${id_post}`, { like_count: like + 1, likes: [id_user] })
        )
    }
}
export const AuthAPI = {
    auth() {
        return (
            instance.get(`auth`)
        )
    },
    registeredMe(login, pass) {
        return (
            instance.post(`me`, { login, pass })
        )
    },
    isMe() {
        return (
            instance.get(`me`)
        )
    },
    logOutMe() {
        return(
            instance.post(`me`)
        )
    },
    likedPosts(id_post) {
        return (
            instance.patch(`auth`, { likedPosts: [id_post] })
        )
    }
}
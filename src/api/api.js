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
                .then(responce => {

                    return responce
                })
        )
    },
    unfollowUser(id) {
        return (
            instance.patch(`users/${id}`, { "following": false })
                .then(responce => {

                    return responce
                })
        )
    },
    getUser(id) {
        return (
            instance.get(`users/${id ? id : "1"}`)
                .then(responce => {
                    return responce
                })
        )
    }
}
export const PostsAPI = {
    getPosts() {
        return (
            instance.get(`posts`)
                .then(responce => {
                    return responce
                })
        )
    },
    addPost(text) {
        let dateAction = new Date().toLocaleString();

        return (
            instance.post(`posts`, { message: text, date: dateAction, like_count: 0, share_count: 0, likes: [] })
                .then(responce => {
                    return responce
                })
        )
    },
    likePost(id_post, likes, id_user) {
        return (
            instance.patch(`posts/${id_post}`, { like_count: likes, likes: [id_user] })
                .then(responce => {
                    return responce
                })
        )
    }
}
export const AuthAPI = {
    auth(login, pass) {
        return (
            instance.get(`auth`)
        )
    }
}
import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/users'
})

export const UsersAPI = {
    getAllUsers(){
        return (
            instance.get()
                .then(responce => {
                    return responce.data
                })
        )
    },
    getUsersPage(page){
        return (
            instance.get(`?_page=${page}`)
                .then(responce => {
                    return responce.data
                })
        )
    },
    followUser(id){
        return(
            instance.patch(`/${id}`, { "following": true })
                .then(responce => {
                    
                    return responce
                })
        )
    },
    unfollowUser(id){
        return(
            instance.patch(`/${id}`, { "following": false })
                .then(responce => {
                    
                    return responce
                })
        )
    }
}


import { UsersAPI, PostsAPI, ProfileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-NEW-POST";
const SET_PROFILE_USER = "SET_PROFILE_USER";
const TOGGLE_PRELODER_USER = "TOGGLE_PRELODER_USER";
const TOGGLE_PRELODER_POSTS = "TOGGLE_PRELODER_POSTS";
const CLEAR_PROFILE_DATA = "CLEAR_PROFILE_DATA";
const SET_PROFILE_POSTS = "SET_PROFILE_POSTS";
const DISABLE_POSTING = "DISABLE_POSTING";
const DISABLE_LIKING = "DISABLE_LIKING";
const LIKE_POST = "LIKE_POST";
const CHANGE_USER_STATUS = "CHANGE_USER_STATUS";


let initialState = {
    profileData: {},
    profilePosts: {},
    toggleFetchInfoUser: false,
    toggleFetchPostsData: false,
    disabledPosting: false,
    disabledLiking: [],
    posts: {},
    newPost: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let dateAction = new Date().toLocaleString();
            let objPost = {
                id: state.posts.length,
                message: state.newPost,
                date: dateAction,
                like_count: 0,
                share_count: 0
            }
            return {
                ...state,
                posts: [...state.posts, objPost],
                newPost: ''
            };
        }
        case UPDATE_TEXT_POST:
            return {
                ...state,
                newPost: action.value

            }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        case TOGGLE_PRELODER_USER: {
            return {
                ...state,
                toggleFetchInfoUser: action.isFetching
            }
        }
        case TOGGLE_PRELODER_POSTS: {
            return {
                ...state,
                toggleFetchPostsData: action.isFetching
            }
        }
        case CLEAR_PROFILE_DATA: {
            return {
                ...state,
                profileData: {}
            }
        }
        case SET_PROFILE_POSTS: {
            return {
                ...state,
                posts: action.postsData
            }
        }
        case DISABLE_POSTING: {
            return {
                ...state,
                disabledPosting: action.isFetching
            }
        }
        case DISABLE_LIKING: {
            return {
                ...state,
                disabledLiking: action.succes
                    ? [...state.disabledLiking, action.id_post]
                    : state.disabledLiking.filter(id => id !== action.id_post)
            }
        }
        case LIKE_POST: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.id_post) {
                        return { ...p, like_count: p.like_count + 1 }
                    }
                    return p
                })
            }
        }
        case CHANGE_USER_STATUS:
            return {
                ...state,
                profileData: { ...state.profileData, status: action.status }
            }
        default:
            return state;
    }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = (text) => ({ type: UPDATE_TEXT_POST, value: text });
export const setProfileUser = (profileData) => ({ type: SET_PROFILE_USER, profileData });
export const setProfilePosts = (postsData) => ({ type: SET_PROFILE_POSTS, postsData });
export const togglePreloderUser = (isFetching) => ({ type: TOGGLE_PRELODER_USER, isFetching });
export const togglePreloderPosts = (isFetching) => ({ type: TOGGLE_PRELODER_POSTS, isFetching });
export const clearProfileData = () => ({ type: CLEAR_PROFILE_DATA });
export const toggleDisablePosting = (isFetching) => ({ type: DISABLE_POSTING, isFetching });

export const toggleDisableLiking = (succes, id_post) => ({ type: DISABLE_LIKING, succes, id_post });
export const likePostAction = (id_post) => ({ type: LIKE_POST, id_post });

export const changeUserStatus = (status) => ({ type: CHANGE_USER_STATUS, status })



export const getUser = (user_id) => {
    return (dispatch) => {
        dispatch(togglePreloderUser(true, user_id))
        UsersAPI.getUser(user_id)
            .then(responce => {
                dispatch(setProfileUser(responce.data))
                dispatch(togglePreloderUser(false, user_id))
            })
    }
}

export const getPosts = () => {
    return (dispatch) => {
        dispatch(togglePreloderPosts(true))
        PostsAPI.getPosts()
            .then(responce => {
                dispatch(setProfilePosts(responce.data))
                dispatch(togglePreloderPosts(false))
            })
    }
}

export const addPost = (text) => {
    return (dispatch) => {

        if (text.length !== 0) {
            dispatch(toggleDisablePosting(true))
            PostsAPI.addPost(text)
                .then(responce => {
                    if (responce.status === 201) {
                        dispatch(addPostAction())
                        dispatch(toggleDisablePosting(false))
                    }
                })
        } else {
            alert("Вы не ввели сообщение! Введите сообщение и повторите попытку...")
        }

    }
}

export const likePost = (id_post, like, id_user) => {
    return (dispatch) => {

        dispatch(toggleDisableLiking(true, id_post))

        PostsAPI.likePost(id_post, like, id_user)
            .then(responce => {
                if (responce.status === 200) {

                    dispatch(likePostAction(id_post))

                    dispatch(toggleDisableLiking(false, id_post))
                }
            })
    }
}

export const changeStatus = (id_user, status) => (dispatch) => {
    ProfileAPI.changeUserStatus(id_user, status)
        .then(responce => {
            if (responce.status === 200) {
                dispatch(changeUserStatus(status))
            }
        })

}

export default profileReducer;
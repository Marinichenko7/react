const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-NEW-POST";

let initialState = {
    posts: [
        { id: 0, message: 'I will go to the park and zoo tomorow.', date: "10.05.2020, 18:45", like_count: 18, share_count: 8 },
        { id: 1, message: 'Hi! How are you?', date: "10.05.2020, 18:45", like_count: 2, share_count: 1 },
        { id: 2, message: 'I was in market to day. So, what did you do?', date: "10.05.2020, 18:45", like_count: 12, share_count: 41 },
        { id: 3, message: 'I will go to the park and zoo tomorow.', date: "10.05.2020, 18:45", like_count: 18, share_count: 8 },
        { id: 4, message: 'Hi! How are you?', date: "10.05.2020, 18:45", like_count: 158, share_count: 36 }
    ],
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
            //stateCopy.posts = [...state.posts];
            //stateCopy.posts.push(objPost);
            //stateCopy.newPost = '';
            //return stateCopy;
        }
        case UPDATE_TEXT_POST:
            return {
                ...state,
                newPost: action.value

            }
        //stateCopy.newPost = action.value;
        //return stateCopy;
        default:
            return state;
    }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = (text) => ({ type: UPDATE_TEXT_POST, value: text });


export default profileReducer;
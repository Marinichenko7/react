const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-NEW-POST";

const profileReducer = (state, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let dateAction = new Date().toLocaleString();
            let objPost = {
                id: state.posts.length,
                message: state.newPost,
                date: dateAction,
                like_count: 0,
                share_count: 0
            }
            state.posts.push(objPost);
            state.newPost = '';
            return state;

        case UPDATE_TEXT_POST:
            state.newPost = action.value;
            return state;
        default:
            return state;
    }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = (text) => ({ type: UPDATE_TEXT_POST, value: text });


export default profileReducer;
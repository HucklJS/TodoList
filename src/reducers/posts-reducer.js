const initialState = [];

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            return [...state, action.value];
        case "TOGGLE-DONE":
            return state.map(post => {
                if (post.id === action.postId) {
                    return {...post, isDone: !post.isDone};
                }
                return post;
            });
        case "REMOVE-DONE-POSTS":
            const newState = state.filter(post => !post.isDone);
            return newState.length < state.length ? newState : state;
        default:
            return state;
    }
};

export default PostsReducer;

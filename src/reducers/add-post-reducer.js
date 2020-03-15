const initialState = [];

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            return [...state, action.value];
        case "TOGGLE-DONE":
            return state.map(item => {
                if (item.id === action.value) {
                    return {...item, isDone: !item.isDone};
                }
                return item;
            });
        default:
            return state;
    }
};

export default PostsReducer;

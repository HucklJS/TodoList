const initialState = "";

const newPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT":
            return action.value;
        default:
            return state;
    }
};

export default newPostReducer;

const add = value => ({type: "ADD-POST", value});
const update = value => ({type: "UPDATE-NEW-POST-TEXT", value});
const toggle = postId => {
    return {type: "TOGGLE-DONE", postId};
};
const remove = () => ({type: "REMOVE-DONE-POSTS"});
export {add, update, toggle, remove};

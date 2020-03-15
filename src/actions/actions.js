const add = value => ({type: "ADD-POST", value});
const update = value => ({type: "UPDATE-NEW-POST-TEXT", value});
const toggle = value => {
    debugger;
    return {type: "TOGGLE-DONE", value};
};
export {add, update, toggle};

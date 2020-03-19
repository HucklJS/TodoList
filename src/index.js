import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import PostsReducer from "./reducers/posts-reducer";
import newPostReducer from "./reducers/new-post-text-reducer";

const reducers = combineReducers({
    posts: PostsReducer,
    newPostText: newPostReducer
});

const store = createStore(reducers);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

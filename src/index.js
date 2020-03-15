import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import PostsReducer from "./reducers/add-post-reducer";
import newPostReducer from "./reducers/update-new-post-text-reducer";

const reducers = combineReducers({
    posts: PostsReducer,
    newPostText: newPostReducer
});

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

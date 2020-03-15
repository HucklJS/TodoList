import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as actions from "../actions/actions";
import {bindActionCreators} from "redux";

const Item = styled.span`
    position: relative;
    display: block;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 28px;
    /* color: rgba(0, 0, 0, 0.5); */
    color: ${props => (props.isDone ? "rgba(0, 0, 0, 0.5)" : null)};
    cursor: pointer;
    &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        display: block;
        width: 60px;
        height: 0.9px;
        background: rgba(0, 0, 0, 0.5);
    }
`;

const PostListBlock = styled.div`
    display: block;
    margin-bottom: 20px;
`;

const PostList = ({posts, toggle}) => {
    return (
        <PostListBlock>
            {posts.map(post => {
                const {id, message, isDone} = post;
                debugger;
                return (
                    <Item key={id} isDone={isDone} onClick={() => toggle(id)}>
                        {message}
                    </Item>
                );
            })}
        </PostListBlock>
    );
};

const mapStateToProps = store => {
    return {
        posts: store.posts
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

// <Item>Learn React</Item>
// <Item>Redux is awesome</Item>

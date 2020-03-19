import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/actions";

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 8px 0;
    margin: 0 auto;
    background: inherit;
    border: none;
    border-bottom: 1px solid #000000;
    font-size: 18px;
    line-height: 21px;
    &:focus {
        outline: none;
    }
`;

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 15px;
`;

const Btn = styled.button`
    width: 135px;
    max-width: 49%;
    height: 40px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 8px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
`;

const CompletedBtn = styled(Btn)`
    background: #ffe482;
`;

const AddBtn = styled(Btn)`
    background: #ffffff;
`;

let i = 0;

const PostAddForm = ({inputText, add, update, remove}) => {
    const onInputChange = e => {
        const value = e.target.value;
        update(value);
    };

    const onNewPostAdd = e => {
        e.preventDefault();

        if (inputText === "") {
            alert("Введите хоть что-то");
            return;
        }

        add({
            id: i++,
            message: inputText,
            isDone: false
        });
        update("");
    };

    const onPostRemove = () => {
        remove();
    };

    return (
        <form>
            <Input
                type="text"
                placeholder="Enter a new todo item"
                value={inputText}
                onChange={onInputChange}
            />
            <ButtonsBlock>
                <CompletedBtn type="button" onClick={onPostRemove}>
                    Hide completed
                </CompletedBtn>
                <AddBtn type="submit" onClick={onNewPostAdd}>
                    Add new
                </AddBtn>
            </ButtonsBlock>
        </form>
    );
};

const mapStateToProps = store => {
    return {
        inputText: store.newPostText
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);

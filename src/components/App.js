import React from "react";
import styled from "styled-components";
import PostAddForm from "./post-add-form";
import PostList from "./post-list";

const Main = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(180deg, #ca94ff 0%, rgba(70, 6, 134, 0.81) 100%);
`;

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 650px;
    max-width: 90%;
    min-height: 100px;
    padding: 30px 50px;
    background: rgba(255, 255, 255, 0.67);
    border-radius: 8px;
    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;

function App() {
    return (
        <Main>
            <MainBlock>
                <PostList />
                <PostAddForm />
            </MainBlock>
        </Main>
    );
}

export default App;

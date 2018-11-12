import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        border: 0;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
        font-weight: bold;
    }
    button {
        height: 55px;
        padding: 0 20px;
        background: #63f5b0;
        border: 0;
        font-size: 20px;
        color: #fff;
        border-radius: 3px;
        margin-left: 5px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: #52d89f;
        }
    }
`;

const Main = () => (
    <Container>
        <img src={logo} alt="GitHub Compare" />
        <Form>
            <input type="text" placeholder="user/repo" />
            <button type="submit">OK</button>
        </Form>
    </Container>
);

export default Main;

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Form = styled.form`
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

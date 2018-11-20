import React, { Component, Fragment } from "react";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #DC6A17;
    font-family: sans-serif;
    margin:0;
    padding: 0;
    outline: 0;
  }
`;

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Main />
            </Fragment>
        );
    }
}

export default App;

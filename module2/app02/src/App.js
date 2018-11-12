import React from "react";
import styled from "styled-components";
import Main from "./pages/Main";

class App extends React.Component {
    componentWillMount() {
        document.body.style.backgroundColor = "#DC6A17";
    }

    render() {
        return <Main />;
    }
}

export default App;

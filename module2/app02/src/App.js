import React, { Component } from "react";
import Main from "./pages/Main";

class App extends Component {
    componentWillMount() {
        const body = document.body.style;

        body.backgroundColor = "#DC6A17";
        body.fontFamily = "sans-serif";
        body.margin = "0px";
        body.padding = "0px";
        body.outline = "0px";
    }

    render() {
        return <Main />;
    }
}

export default App;

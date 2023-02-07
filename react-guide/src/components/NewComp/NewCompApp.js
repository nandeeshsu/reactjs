import React from "react";
import "../../App.css";
import NewComp from "./NewComp";

class NewCompApp extends React.Component {
    styles = {
        fontStyle: "bold",
        color: "teal"
    };

    render() {
        return(
            <div className="App">
                <h1 style={this.styles}>Welcome to NewComp</h1>
                <NewComp />
            </div>
        );
    }
}

export default NewCompApp;
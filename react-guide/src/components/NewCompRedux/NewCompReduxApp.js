import React from "react";
import "../../App.css";
import NewCompRedux from "./NewCompRedux";

class NewCompReduxApp extends React.Component {
    styles = {
        fontStyle: "bold",
        color: "teal"
    };

    render() {
        return(
            <div className="App">
                <h1 style={this.styles}>Welcome to NewCompRedux</h1>
                <NewCompRedux />
            </div>
        );
    }
}

export default NewCompReduxApp;
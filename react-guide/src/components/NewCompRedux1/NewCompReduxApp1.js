import React from "react";
import "../../App.css";
import NewCompRedux1 from "./NewCompRedux1";

class NewCompReduxApp1 extends React.Component {
    styles = {
        fontStyle: "bold",
        color: "teal"
    };

    render() {
        return(
            <div className="App">
                <h1 style={this.styles}>Welcome to NewCompRedux1 with connect</h1>
                <NewCompRedux1 />
            </div>
        );
    }
}

export default NewCompReduxApp1;
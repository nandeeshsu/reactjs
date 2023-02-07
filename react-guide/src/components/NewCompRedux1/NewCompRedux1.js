import React, { Component} from "react";
import { connect } from "react-redux";

class NewCompRedux1 extends Component {

    styles = {
        fontStyle: "italic",
        color: "purple"
    };

    render() {
        return(
            <div className="App">
                <h3 style={this.styles}> {this.props.message1} </h3>
                <button onClick={this.props.Buttonchange1}>Subscribe to Redux with connect</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        message1: state.reducer.message1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Buttonchange1: () => dispatch({type: "Message_change"})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCompRedux1);
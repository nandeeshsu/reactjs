const intialState = {
    message1: "Subscribe to React Learning redux 2nd example with connect"
};

const reducer = (state = intialState, action) => {
    const newSate = {...state};
    if(action.type === "Message_change") {
        newSate.message1 = "Thanks for subscribing for redux 2nd example with connect";
    }
    return newSate;
};

export default reducer;
const intialState = {
    message: "Subscribe to React Learning"
};

const reducer = (state = intialState, action) => {
    const newSate = {...state};
    if(action.type === "Message_change") {
        newSate.message = "Thanks for subscribing";
    }
    return newSate;
};

export default reducer;
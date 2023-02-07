import React from "react";
import { buttonchange } from '../../Store/NewCompAppSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function NewCompRedux() {
    const message = useSelector((state) => state.newCompAppReduce.message);
    const dispatch = useDispatch();

    const styles = {
        fontStyle: "italic",
        color: "purple"
    };
   
    return(
        <div className="App">
            <h3 style={styles}> {message} </h3>
            <button onClick={ () => dispatch(buttonchange())}>SubscribeRedux</button>
        </div>
    );
    
};

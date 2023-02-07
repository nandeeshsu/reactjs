import React from "react";

// export default function Hello(props) {
//     if (props.name) {
//       return <h1>Hello, {props.name}!</h1>;
//     } else {
//       return <span>Hey, stranger</span>;
//     }
//   }

const hello = (props) => {
    if(props.name){
        return <h1>Hello, {props.name}</h1>
    } else {
        return <span>Hey, Stranger</span>
    }
};

export default hello;
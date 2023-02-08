import React from "react";
import axios from "axios";

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
        axios.post('http://localhost:8080/test/create', {
            firstName: 'Nandeesh',
            lastName: 'Subbegowda'
          })
          .then(function (response) {
            console.log("success response::", response);

            console.log("success response data::", response.data);
            console.log("success response headers", response.headers);
            //console.log("success response" + JSON.parse(response.data));
          })
          .catch(function (error) {
            console.log("error response" , error);
          });

        return <span>Hey, Stranger</span>   
    }
};

export default hello;
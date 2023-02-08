import React from "react";
import ReactDOM from "react-dom";

// const name = "Nicole";
// const luckyNum = 4;

// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your luck number is {luckyNum}</p>
//   </div>,
//   document.getElementById("root")
// );

// const name = "Nicole";
// const luckyNum = 4;

// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your luck number is {3 + 4}</p>
//   </div>,
//   document.getElementById("root")
// );

// const name = "Nicole";
// const luckyNum = 4;
// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your luck number is {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// const fName = "Nicole";
// const lName = "Bedinghaus";
// const luckyNum = 4;

// ReactDOM.render(
//   <div>
//     <h1>Hello {fName + " " + lName}!</h1>
//     <p>Your luck number is {3 + 4}</p>
//   </div>,
//   document.getElementById("root")
// );

const fName = "Nicole";
const lName = "Bedinghaus";
const luckyNum = 4;

ReactDOM.render(
  <div>
        <h1>Hello {`${fName} ${lName}`}!</h1>   {" "}
    <p>Your luck number is {3 + 4}</p> {" "}
  </div>,
  document.getElementById("root")
);

import React from "react";
import './index.css';
// import ReactDOM from "react-dom";
import * as ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import App from "./component/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const sayHelloManyTimes = (times) =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
// document.body.append(helloDiv);

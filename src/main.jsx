import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"

const root_element= ReactDOM.createRoot(document.getElementById('root'));

if(root_element){
    root_element.render(<App/>);
}else console.log("render error")
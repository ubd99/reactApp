import React, { Component } from "react";

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="bg-[url('./Res/1.jpg')] bg-cover h-screen w-full">
                <p className="text-white">to conditionally render based on the user's login state</p>
            </div>
        )
    }
}

export {Home}
import React from "react";
import { Profile } from "./Profile";

export class About extends React.Component{
    constructor(props){
        super(props)   
        // console.log('parent-constructor') 
    }
     componentDidMount(){
        // console.log('parent-componentDidMount')
    }
    render(){
        // console.log('parent-render')
        return(
            <div>
                <h1>About</h1>
                <Profile />
            </div>
        )
    }
}
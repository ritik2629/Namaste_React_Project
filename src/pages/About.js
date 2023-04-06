import React from "react";
import { Profile } from "./Profile";
import UserContext from "../utils/UserContext";
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
                <UserContext.Consumer>
                    {(user)=>{
                        return(
                            <h3 className=" font-semibold text-blue-600 py-2 mx-3">{`Name: ${user.name} && email : ${user.email}`}</h3>
                        )
                    }}
                </UserContext.Consumer>
            </div>
        )
    }
}
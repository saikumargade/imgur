import React from 'react'
import logo from '../logo.svg'
import '../App.css'
export default class Post extends React.Component{
    render(){
        return(
            <div className="post">
                <img src={logo} alt="react logo"/>
                
            </div>
        )
    }

}
import React from 'react'
import logo from '../logo.svg'
import '../App.css'
export default class Post extends React.Component{
  
    render(){
        // const {title} = this.props
        return(
            <div className="post">
                <img width='100%' src={logo} alt="react logo"/>
                {/* <p>{title}</p> */}
                <div className='post-footer'>
                <div className='upvote'></div>
                <div className='downvote'></div>
                <div className='icons'>
                    <div className='up-count'>0</div>
                    <div className='down-count'>0</div>
                </div>
                
                </div>
            </div>
        )
    }

}
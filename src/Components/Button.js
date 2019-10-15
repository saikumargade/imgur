import React from 'react'

export default class Button extends React.Component{
    
    render(){
        return(
            <button style={{backgroundColor:this.props.color}} onClick={this.props.handleComment} className='button'>{this.props.content}</button>
        )
    }
}

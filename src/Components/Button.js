import React from 'react'

export default class Button extends React.Component{
    
    render(){
        return(
            <button style={{backgroundColor:this.props.color}} className='button'>{this.props.content}</button>
        )
    }
}

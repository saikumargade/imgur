import React from 'react'
import Post from './Post'
const images =['description','123','abc','new'];
export default class Body extends React.Component{
    
    render(){
        return(
            <div className='post-container'>
                {images.map(img => {return <Post title={img}/>})}
            </div>
        )
    }
}
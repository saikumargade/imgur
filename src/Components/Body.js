import React from 'react'
import Post from './Post'
const images =['description','123','abc','description','123','abc','description','123','abc','description','abc','new','description','123','abc','new','description','123','abc'];
export default class Body extends React.Component{
    
    render(){
        return(
            <div className='post-container'>
                {images.map((img,  i) => {return <Post title={img} key={i}/>})}
            </div>
        )
    }
}
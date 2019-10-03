import React from 'react'
import Search from './Search'
import Icon from 'antd/es/icon'
import Button from './Button'
export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <Button content='New Post' color='rgb(34, 131, 34)' />
                <Search />
                <Icon type="message" style={{cursor:'pointer'}} />
                <Button content='Sign in' color='rgb(34, 131, 34)' />
                <Button content='Sign Up' color='rgb(34, 131, 34)' />
            </div>
        )
    }
}


import React from 'react'
import Search from './Search'
import Icon from 'antd/es/icon'
import Button from './Button'
export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <Button content='New Post' />
                <Search />
                <Icon type="message" style={{cursor:'pointer'}} />
                <Button content='Sign in' />
                <Button content='Sign Up' />
            </div>
        )
    }
}


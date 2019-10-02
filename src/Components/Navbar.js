import React from 'react'
import Search from './Search'
import Icon from 'antd/es/icon'
export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <Search />
                <Icon type="bell" />
            </div>
        )
    }
}

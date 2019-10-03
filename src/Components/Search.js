import React from 'react'
import Icon from 'antd/es/icon'
export default class Search extends React.Component{
    render(){
        return(
            <div>
                <input placeholder='search here' style={{border:'black solid 1px',borderRadius:'3px',width:'400px',height:'25px'}}/>
                <Icon type="search" style={{marginLeft:'-20px',cursor:'pointer'}}/>
            </div>
            
        )
    }
}
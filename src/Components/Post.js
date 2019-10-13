import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import Icon from 'antd/es/icon'
export default class Post extends React.Component{
    constructor(){
        super();
        this.state={
            like:'',
            dislike:'',
        }
    }
    
    handleLike=()=>{
        this.newlike=this.state.like===''?'filled':'';
        this.setState({like:this.newlike});
    }
     handleDislike=()=>{
        this.newdislike=this.state.dislike===''?'filled':'';
        this.setState({dislike:this.newdislike});
    }
  
    render(){
        const {title} = this.props;
        
        return(
            <div className="post">
                <img style={{boxSizing:'border-box',borderRadius:'5px'}} width='100%' src={logo} alt="react logo"/>
                <p style={{padding:'0px 10px'}}>{title}</p>
                <div className='post-footer'>
                <Icon type="like"  theme={this.state.like} onClick={this.handleLike} style={{padding:'0px 15px',outline:'none'}} />
                <Icon type="dislike"theme={this.state.dislike} onClick={this.handleDislike} style={{padding:'0px 15px',outline:'none'}}/>
                {/* <div className='up-count'>0</div>
                <div className='down-count'>0</div> */}
                <Icon type='message' style={{padding:'0px 15px'}}/>
                <Icon type="eye" style={{padding:'0px 15px'}} />
                </div>
            </div>
        )
    }

}
import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import './Post.css';
import Icon from 'antd/es/icon'
export default class Post extends React.Component{
    constructor(){
        super();
        this.state={
            like:'',
            dislike:'',
            showPostDetails: false,
            comments: ['sample comment', 'sample comment 2'],
        }
    }
    
    handleLike=()=>{
        this.newlike=((this.state.like===''&&this.state.dislike==='')||(this.state.like===''&&this.state.dislike==='filled'))?'filled':'';
        this.setState({like:this.newlike,dislike:''});

    }
     handleDislike=()=>{
        this.newdislike=((this.state.dislike===''&&this.state.like==='')||(this.state.dislike===''&&this.state.like==='filled'))?'filled':'';
        this.setState({dislike:this.newdislike,like:''});
    }

    exitPostDetails = ()=> {
        this.setState({showPostDetails: false});
    }
  
    render(){
        const {title} = this.props;

        const postDetails = <div className="postDetails" onClick={this.exitPostDetails}>
            <div className="postContainer" onClick= {e=>e.stopPropagation()}>
                <img src={logo} alt="Post Image"/>
                <div className="postComments">
                    <ol>
                        {this.state.comments.map((comment, i) => (<li className="postComment" key={i}>comment</li>))}
                    </ol>
                </div>
            </div>
        </div>

        return(
            <div className="post">
                <img style={{boxSizing:'border-box',borderRadius:'5px'}} width='100%' src={logo} alt="react logo"/>
                <p style={{padding:'0px 10px'}}>{title}</p>
                <div className='post-footer'>
                <Icon type="like"  theme={this.state.like} onClick={this.handleLike} style={{padding:'0px 15px',outline:'none'}} />
                <Icon type="dislike"theme={this.state.dislike} onClick={this.handleDislike} style={{padding:'0px 15px',outline:'none'}}/>
                {/* <div className='up-count'>0</div>
                <div className='down-count'>0</div> */}
                <Icon type='message' style={{padding:'0px 15px'}} onClick={()=> this.setState({showPostDetails: 'block'})}/>
                <Icon type="eye" style={{padding:'0px 15px'}} />
                </div>

                {this.state.showPostDetails ? postDetails: null}
            </div>
        )
    }

}
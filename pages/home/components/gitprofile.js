import React from 'react'
 
class GitProfile extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="row profile">
                     <div className="image-cropper profilepic col-xs-3">
                    <img src={this.props.data.avatar} alt=""/>
                </div>
                <div className="data col-xs-3">
                     <span>{this.props.data.username}</span>
                     <p className="name">{this.props.data.name}</p>
                </div>
                <div className="social">
                    <div className="seg col-xs-2">
                        <div className="">
                                Followers
                        </div>
                        <div className="num">
                                {this.props.data.followers}
                        </div>
                    </div>  
                    <div className="seg col-xs-2">
                        <div className="">
                                Following
                        </div>
                        <div className="num">
                                {this.props.data.following}
                        </div>
                    </div>
                    <div className="seg col-xs-2">
                        <div className="">
                                Repository
                        </div>
                        <div className="num">
                                {this.props.data.repos}
                        </div>
                    </div> 
                </div>
                </div>
            </div> 
        )
    }
}

export default GitProfile
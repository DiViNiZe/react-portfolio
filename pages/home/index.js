import React from 'react'
import Gitpro from './components/gitprofile.js'
import Repo from './components/repo.js'
const API = 'https://api.github.com/users';
class index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'DiViNiZe',
            name:'',
            avatar:'',
            location:'',
            repos:'',
            followers: '',
            following:'',
            homeUrl:'',
            notFound:'',
            repoInfo:{},
        }
    }
    fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
     
    }
    fetchStarred(username){
        let url = `${API}/${username}/starred`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
           this.setState({
               repoInfo:data,
           })
        })
  }
    componentDidMount() {
        this.fetchProfile(this.state.username);
        this.fetchStarred(this.state.username);
  }

  render(){
      return(
          <div className ="body">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="static/style.css"/>
                <div className="container">
                     <Gitpro data={this.state}/>
                     <Repo data = {this.state.repoInfo}/>
                </div>
          </div>
      )
  }

}

export default index


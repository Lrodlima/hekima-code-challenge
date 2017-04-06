import React, { Component } from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import getGithubInfo from '../utils/helpers'
import Rebase from 're-base'

const base = Rebase.createClass('https://github-note-taker.firebaseio.com/')

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        bio: {},
        repos: []
      }
    }
    init(username){
      this.ref = base.bindToState(username, {
        context: this,
        asArray: true,
        state: 'notes'
      })

      getGithubInfo(username)
            .then(function(data){
              this.setState({
                bio: data.bio,
                repos: data.repos
              })
            }.bind(this))
    }
    handleAddNote(newNote){
      base.post(this.props.params.username, {
        data: this.state.notes.concat([newNote])
      })
    }
    componentDidMount(){
      this.init(this.props.params.username);
    }
    componentWillReceiveProps (nextProps) {
      base.removeBinding(this.ref)
      this.init(nextProps.params.username)
    }
    componentWillUnmout(){
      base.removeBinding(this.ref)
    }
    render() {
      return (
        <div className="row">
          <div className="col-md-4">
            <UserProfile username={this.props.params.username} bio={this.state.bio} />
          </div>
          <div className="col-md-4">
            <Repos username={this.props.params.username} repos={this.state.repos}/>
          </div>
          <div className="col-md-4">
            <Notes username={this.props.params.username}
                   addNote={(newNote) => this.handleAddNote(newNote)}
                   notes={this.state.notes} />
          </div>
        </div>
      );
    }
}

export default Profile;
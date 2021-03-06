import React, { Component, PropTypes } from 'react'

class SearchGithub extends Component {
    getRef(ref){
      this.usernameRef = ref;
    }
    handleSubmit(){
      const username = this.usernameRef.value;
      this.usernameRef.value = '';
      this.props.history.pushState(null, `/profile/${username}`)
    }
    render() {
        return (
          <div className="col-sm-12">
            <form onSubmit={() => this.handleSubmit()}>
              <div className="form-group col-sm-7">
                <input type="text"className="form-control" ref={(ref) => this.getRef(ref)}/>
              </div>
              <div className="form-group col-sm-5">
                <button type="submit" className="btn btn-block btn-primary">Buscar no Github</button>
              </div>
            </form>
          </div>
        );
    }
}

SearchGithub.propTypes = {
  history: PropTypes.object.isRequired
};

export default SearchGithub;



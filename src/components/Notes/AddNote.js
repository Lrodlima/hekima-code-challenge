import React, { Component, PropTypes } from 'react'

class AddNote extends Component {

  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }

  setRef(ref){
    this.note = ref;
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Adicionar uma nova anotação" ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Enviar</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default AddNote





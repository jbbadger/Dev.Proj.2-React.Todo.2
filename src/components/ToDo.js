import React, { Component } from 'react';

class ToDo extends Component{
  constructor(props){
    super(props);
    //this.state here
    //bind(this) here
  }
    //methods here
  render(){
    return(
        <li>
          {this.props.description}
          <input
            type="checkbox"
            checked={this.props.isCompleted}
            onChange={ this.props.handleToggle }
          />
          <button onClick={this.props.handleDelete}>Delete</button>
        </li>
    )
  };
}

export default ToDo;

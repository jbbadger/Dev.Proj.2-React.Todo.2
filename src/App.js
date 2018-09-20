import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:
      [{description: 'eat lunch', isCompleted: false},
       {description: 'take nap', isCompleted: true},
       {description: 'code website', isCompleted: false}],
      newTodoDescription: ''
    };
    //bind(this) here
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
    //methods here
    handleToggle(index){
      let newTodos = this.state.todos.slice();
      let newTodo = newTodos[index];
      newTodo.isCompleted = !newTodo.isCompleted;
      this.setState({todos: newTodos});
      console.log("toggle handled");
    }

    handleInput(e){
      this.setState({ newTodoDescription: e.target.value });
      console.log("input handled");
    }

    handleSubmit(e){
      e.preventDefault();
      if(!this.state.newTodoDescription) {return};
      const newSubmission = { description: this.state.newTodoDescription, isCompleted: false};
      this.setState({ todos: [...this.state.todos, newSubmission ], newTodoDescription: '' });
      console.log("submit handled");
    }

    handleDelete(item){
      let updatedTodos = this.state.todos;
      let filteredTodos = updatedTodos.filter((filtItem) => filtItem !== item);
      this.setState({ todos: filteredTodos })
      console.log("delete handled");
    }

  render() {
    return (
      <div className="App">
        <ul>
        {this.state.todos.map ((item, index) =>
          <ToDo
            key={ index }
            description={ item.description }
            isCompleted={ item.isCompleted }
            handleToggle={() => this.handleToggle(index) }
            handleDelete={() => this.handleDelete(item) }
          />)}
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.newTodoDescription }
            onChange= { this.handleInput }
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

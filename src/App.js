import React from 'react';
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";


const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Sweep Floors',
    id: 1528817077287,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
     todoList : todos
    }
  }

  toggleCompleted= itemId => {
    console.log(itemId);
    this.setState({
      todos: this.state.todoList.map(item => {
        if (item.id === itemId) {
          item.completed = !item.completed
          console.log(item);


          // return {
          //   ...item,
          //   completed: !item.completed
          // };
        }
        return item;
      })
    })
  };

  addItem = itemName => {
    this.setState({
      todos: [...this.state.todos, {name: itemName, id: Date.now(),completed: false}]
    })
  };

  clearCompleted = () => {
    console.log("clear completed");
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed 
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>What to do today:</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
        todos={this.state.todoList} 
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
  
export default App;

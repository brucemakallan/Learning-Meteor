import React, { Component } from 'react';
import Task from './Task.js';

class App extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Milk' },
      { id: 2, title: 'Glue' },
      { id: 3, title: 'Home mini' },
      { id: 4, title: 'Phone' },
    ]
  }

  renderTasks = () => {
    const { tasks } = this.state;
    return tasks.map(task => (
      <Task key={task.id} task={task} />
    ));
  }

  render() { 
    return (
      <div className="container">
        <header>Todo List App (Learning Meteor)</header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
 
export default App;

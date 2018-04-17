import React, {Component} from 'react';

export default class SimpleToDoComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    // pretend this is going out to fetch data from an api
    this.setState({
      todos: [
        {name: 'First Item', done: true},
        {name: 'Second Item', done: false},
        {name: 'Third Item', done: false},
      ]
    })
  }

  render() {
    const todoItems = this.state.todos.map((todo, index) =>
      <li key={index}>
        {todo.name} - {todo.done ? '\u2713' : '\u2717'}
      </li>
    );

    return (
      <div>
        <h2>ToDo</h2>
        <ul>{todoItems}</ul>
      </div>
    );
  }

}

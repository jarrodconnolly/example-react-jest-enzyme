import React from 'react';
import ReactDOM from 'react-dom';
import SimpleToDoComponent from './simple-todo-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <SimpleToDoComponent />
      </div>
    );
  }
}

let mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

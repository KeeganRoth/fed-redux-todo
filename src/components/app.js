import React from "react";
import * as countActions from "../actions/count";
import * as todoActions from "../actions/todos";
import { connect } from "react-redux";

class App extends React.Component {
  state = {
    todoInputText: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todoInputText);
  };
  handleChange = e => {
    this.setState({ todoInputText: e.target.value });
  };
  renderTodos = () => {
    return this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>);
  };

  render() {
    console.log(this.props);
    return (
      <main>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.incrementCount}>Increment</button>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoInputText}
            onChange={this.handleChange}
          />
          <button>Add todo</button>
        </form>
        <ol>{this.renderTodos()}</ol>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  { ...todoActions, ...countActions }
)(App);

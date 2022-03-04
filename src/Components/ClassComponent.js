import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      todoList: ["Primer item"],
      list: "",
    };
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };

  handleInputChange = (e) => {
    this.setState({ ...this.state, list: e.target.value });
  };

  handleAddToDo = (e) => {
    const newArr = this.state.todoList.concat(this.state.list);
    this.setState({
      ...this.state,
      todoList: newArr,
    });
  };

  render() {
    return (
      <>
        <p> {this.state.counter} </p>
        <h1> Class Component</h1>
        <button onClick={this.handleIncrement}> Incrementar </button>
        <h1> To Do List </h1>
        {this.state.todoList.map((todo, index) => (
          <li key={index}> {todo} </li>
        ))}
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.handleAddToDo}> Add To Do </button>
      </>
    );
  }
}

export default ClassComponent;

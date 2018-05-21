import React, { Component } from 'react';
import TodoItems from "./TodoItems";


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      date: new Date()
    };
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h2 style={{ paddingLeft: 93 + 'em', fontSize: 13 + 'px' }}>{this.state.days[this.state.date.getDay()] + ',' + this.state.date.getDate() + '-' + ((this.state.date.getMonth() + 1 < 10) ? ('0' + (this.state.date.getMonth() + 1)) : (this.state.date.getMonth() + 1)) + '-' + this.state.date.getFullYear()}</h2>
        <h2 style={{ paddingLeft: 95 + 'em', fontSize: 13 + 'px' }} >{this.state.date.toLocaleTimeString()}.</h2>
        <h2>todos</h2>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} placeholder="What needs to be done?">
              </input>
              <button type="submit">add</button>
            </form>
            <TodoItems entries={this.state.items} />
          </div>
        </div>

      </div>

    );
  }
}

export default ToDoList;

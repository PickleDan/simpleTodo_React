import React from "react";
import { uniqueId } from "lodash";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], currentValue: "" }; //Внутри массив с объектами
  }

  handleSubmit = e => {
    e.preventDefault();
    const value = this.state.currentValue;
    const items = this.state.items;
    const current = {
      id: uniqueId(),
      title: value
    };
    this.setState({ items: [current, ...items], currentValue: "" });
  };

  handleInput = e => {
    this.setState({ currentValue: e.target.value });
  };

  removeTodo = id => e => {
    e.preventDefault();
    const items = this.state.items;
    const filtered = items.filter(item => item.id !== id);
    this.setState({ items: filtered });
  };

  render() {
    const value = this.state.currentValue;
    const items = this.state.items;

    return (
      <>
        <div>
          <div className="mb-3">
            <form
              className="todo-form form-inline mx-3"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <input
                  className="form-control mr-3"
                  placeholder="I am going..."
                  required={true}
                  type="text"
                  value={value}
                  onChange={this.handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                add
              </button>
            </form>
          </div>

          {items.map(todo => (
            <Item
              todo={todo}
              key={todo.id}
              onRemove={this.removeTodo(todo.id)}
            />
          ))}
        </div>
      </>
    );
  }
}

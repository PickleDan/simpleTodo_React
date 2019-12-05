import React from "react";

export default class Item extends React.Component {
  render() {
    const { todo } = this.props;
    const { onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div>
            <form
              className="todo-remove-item-form"
              action=""
              onSubmit={onRemove}
            >
              <button type="submit" className="btn btn-primary btn-sm">
                -
              </button>
            </form>
          </div>
          <div className="col-10">{todo.title}</div>
        </div>
        <hr />
      </div>
    );
  }
}

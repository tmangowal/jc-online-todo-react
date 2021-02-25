import React from 'react';

class TodoItem extends React.Component {

  deleteBtnHandler() {
    alert("Anda memencet button DELETE");
  }

  btnHandler(type) {
    alert(`Anda memencet button ${type}`)
  }

  render () {
    return (
      <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
        Makan
        <div>
          <button onClick={this.deleteBtnHandler} className="btn btn-danger">Delete</button>
          <button onClick={() => this.btnHandler("COMPLETE")} className="btn btn-success">Complete</button>
        </div>
      </div>
    )
  }
}

export default TodoItem;
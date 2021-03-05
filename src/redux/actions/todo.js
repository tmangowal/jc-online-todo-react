import Axios from "axios";

export const incrementTodoCount = () => {
  return {
    type: "INCREMENT_TODO_COUNT",
  };
};

export const decrementTodoCount = () => {
  return {
    type: "DECREMENT_TODO_COUNT",
  };
};

export const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

export const addTodo = (todoObject) => {
  return (dispatch) => {
    /**
     * todoObject = {
     *   activity: string,
     *   isFinished: boolean,
     * }
     */
    Axios.post("http://localhost:2000/todo", todoObject)
      .then(() => {
        Axios.get("http://localhost:2000/todo") // Get latest Todo data
          .then((response) => {
            console.log(response.data);
            dispatch({
              type: "GET_TODO",
              payload: response.data,
            });

            dispatch({
              type: "CHANGE_TODO_COUNT",
              payload: response.data.length,
            });
          })
          .catch((err) => {
            alert("Terjadi kesalahan di server!!");
          });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server!!");
      });
  };
};

export const completeTodo = (id) => {
  return (dispatch) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      isFinished: true,
    })
      .then(() => {
        Axios.get("http://localhost:2000/todo") // Get latest Todo data
          .then((response) => {
            console.log(response.data);
            dispatch({
              type: "GET_TODO",
              payload: response.data,
            });

            dispatch({
              type: "CHANGE_TODO_COUNT",
              payload: response.data.length,
            });
          })
          .catch((err) => {
            alert("Terjadi kesalahan di server!!");
          });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server!!");
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        Axios.get("http://localhost:2000/todo") // Get latest Todo data
          .then((response) => {
            console.log(response.data);
            dispatch({
              type: "GET_TODO",
              payload: response.data,
            });

            dispatch({
              type: "CHANGE_TODO_COUNT",
              payload: response.data.length,
            });
          })
          .catch((err) => {
            alert("Terjadi kesalahan di server!!");
          });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server!!");
      });
  };
};

export const fetchTodoGlobal = () => {
  return (dispatch) => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_TODO",
          payload: response.data,
        });

        dispatch({
          type: "CHANGE_TODO_COUNT",
          payload: response.data.length,
        });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server!!");
      });
  };
};

import "./App.css";
import { useState } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [editTodo, setEditTodo] = useState("");

  const handleAddTodo = () => {
    if (!todoInput.trim()) {
      showAlert(true, "danger", "please add todo");
    } else {
      showAlert(true, "success", "todo added");
      setTodos([...todos, { name: todoInput, id: Date.now() }]);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleUpdateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todos, todoInput };
        } else {
          return todos;
        }
      })
    );
  };

  return (
    <div className="App">
      {alert.show ? (
        <Alert alert={alert} todos={todos} removeAlert={showAlert} />
      ) : (
        ""
      )}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>add todo</button>
      <List todos={todos} handleUpdateTodo={handleUpdateTodo} />
    </div>
  );
}

export default App;

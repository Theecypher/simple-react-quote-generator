import { useState } from "react";
import { useTodosContext } from "../context/TodosContext";

const InputTodo = () => {
  const { addTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState(" ");

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle(" ");
    }
    else {
      setMessage(alert("Cannot set empty todo"))
    }
  }

    return (
      <>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
        className="input-text"
        placeholder="Add Todo"
        type="text" 
        name="title"
        value={title}
        onChange={handleChange}
        />
        <button className="input-submit">Submit</button>
      </form>

      <span className="submit-warning">{message}</span>
        </>
    )
  };
  export default InputTodo;
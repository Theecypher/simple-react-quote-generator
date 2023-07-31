
import { useState } from "react";
import styles from "../styles/TodoItem.module.css"
import { useTodosContext } from "../context/TodosContext";

const TodoItem = ({ itemProp }) => {
  const { handleChange, delTodo, updateTodo, toggleCheckbox} = useTodosContext();
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };


  const handleDelete = (id) => {
    setTodos((prevState) => 
    prevState.filter((todo) => {
      return todo.id != id
    })
    )
  }

  const handleEdit = () => {
    setEditing(true);
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      updateTodo(updateInput, itemProp.id)
      setEditing(false);
    }
  }

    return ( 
        // <h1>Mma!</h1>
       <li
       className={styles.item} 
       >
        <div className={styles.content} style={viewMode}>
        <input
         checked={itemProp.completed}
          type="checkbox"
          onChange={() => toggleCheckbox(itemProp.id)}
           />
           <span style={itemProp.completed ? completedStyle : null}>
         {updateInput}
           </span>
           <button onClick={handleEdit}>Edit</button>
         <button onClick={() => handleDelete(itemProp.id)} >Delete</button>
        </div>

        <input type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
        onChange={(e) => setUpdateInput(e.target.value)}
         />
        </li>
     );
}
 
export default TodoItem;
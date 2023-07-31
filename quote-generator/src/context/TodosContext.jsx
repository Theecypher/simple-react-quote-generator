import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

const TodoContext = createContext(null);

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState(getInitialTodos());
    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
      }, [todos])
      
      function getInitialTodos () {
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
      } 
      
    
      const toggleCheckbox = (id) => {
        setTodos((prevState) => 
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
            ...todo,
            completed: !todo.completed
            }
          }
          return todo;
      })
        );
      };
    
      const addTodo = (title) => {
        const newTodo = {
          id: 4,
          title: title,
          completed: false
        }
        setTodos([...todos, newTodo])
      }
    
      const updateTodo = (editedTitle, id) => {
        setTodos((prevTodo) => 
        prevTodo.map((todo) => {
          if (todo.id === id) {
            todo.title = editedTitle
          }
          return todo;
        })
        )
      }
    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            updateTodo,
            toggleCheckbox
        }}>
            {children}
        </TodoContext.Provider>
    )
};

export const useTodosContext = () => useContext(TodoContext);
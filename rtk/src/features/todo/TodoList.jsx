import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id))
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todoList">
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;

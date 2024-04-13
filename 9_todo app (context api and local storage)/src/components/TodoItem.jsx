import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  // State to manage whether the todo is editable
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  
  // State to manage the todo message for editing
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  
  // Accessing updateTodo, deleteTodo, and toggleComplete functions from TodoContext
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  // Function to edit the todo
  const editTodo = () => {
    // Update the todo with the new message
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    
    // Set isTodoEditable to false after editing
    setIsTodoEditable(false);
  };

  // Function to toggle the completion status of the todo
  const toggleCompleted = () => {
    // Toggle the completion status of the todo
    toggleComplete(todo.id);
  };

  return (
    // Todo item component
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        // Conditional styling based on todo completion status
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox to toggle completion status */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      
      {/* Input field to edit todo message */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          // Conditional styling for input field based on edit mode and completion status
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      
      {/* Edit/Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          // Check if the todo is completed
          if (todo.completed) return;

          // Toggle edit mode or save changes
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {/* Edit icon or Save icon based on edit mode */}
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        {/* Delete icon */}
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

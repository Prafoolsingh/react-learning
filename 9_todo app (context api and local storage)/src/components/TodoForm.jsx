import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {

    // State to manage the input value of the todo
    const [todo, setTodo] = useState("");
    
    // Accessing the addTodo function from the TodoContext
    const { addTodo } = useTodo();

    // Function to handle the form submission
    const add = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Check if the todo input is empty
        if (!todo) return;

        // Add the new todo with completed set to false
        addTodo({ todo:todo, completed: false });

        // Clear the todo input field after adding the todo
        setTodo("");
    }

    return (
        // Todo form component
        <form onSubmit={add} className="flex">
         
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
           
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

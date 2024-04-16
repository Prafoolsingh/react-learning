import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state for the todo slice
const initialState = {
    todos: [{ id: 1, text: "hello world" }]
};

// Create a slice for the todo state using createSlice from Redux Toolkit
export const todoSlice = createSlice({

    name: "todo", // Slice name
    initialState, // Initial state
    reducers: {
        // Reducer function to add a new todo
        addTodo: (state, action) => {
            // Create a new todo object with a unique id using nanoid
            const todo = {
                id: nanoid(),
                text: action.payload // Get todo text from action payload
            };
            // Add the new todo to the todos array in state
            state.todos.push(todo);
        },

        // Reducer function to remove a todo by its id
        removeTodo: (state, action) => {

            // Filter out the todo with the given id from the todos array
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            
        }
    }
});

// Export the addTodo and removeTodo actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the todo reducer
export default todoSlice.reducer;
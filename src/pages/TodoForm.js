import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './TodoForm.styles.scss';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (values, { resetForm, setFieldError }) => {
        const todoText = values.todoText.trim(); // Обрізаємо зайві пробіли
    
        if (!todoText) {
            setFieldError("todoText", "Task cannot be empty");
            return;
        }
    
        setTodos([...todos, { text: todoText, completed: false }]);
        resetForm();
    };    

    const toggleTodo = (index) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-list">
            <div className="todo-input-container">
                <Formik
                    initialValues={{ todoText: '' }}
                    onSubmit={addTodo}
                >
                    {() => (
                        <Form>
                            <Field
                                type="text"
                                name="todoText"
                                placeholder="New task"
                                className="todo-input"
                            />
                            <button type="submit" className="add-button">
                                Add
                            </button>
                            <ErrorMessage name="todoText" component="div" className="error-message" />
                        </Form>
                    )}
                </Formik>
            </div>

            <ul className="todo-items">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <label className="todo-label">
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={() => toggleTodo(index)} 
                                className="todo-checkbox"
                            />
                            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                {todo.text}
                            </span>
                        </label>
                        <button
                            onClick={() => deleteTodo(index)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

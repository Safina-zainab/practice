import React from 'react';
import { useTodoStore } from '../todoStore';

function Todo() {
    const { todos, addTodo } = useTodoStore();

  const handleSubmit = (e : any) => {
    e.preventDefault();
    const text = e.target.elements.todo.value;
    if (text) {
      addTodo(text);
      e.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo : any) => (
          <li>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

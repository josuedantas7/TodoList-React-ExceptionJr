import React from 'react'

export const TodoForm = ({addTodo}) => {
    // criar estado para o nome da tarefa

    const handleSubmit = (e) => {
      // usar o valo0r e adicionar na função addTodo
    };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input className="todo-input" />
      <button type='button' className='todo-btn'>

      </button>
    </form>
  )
}

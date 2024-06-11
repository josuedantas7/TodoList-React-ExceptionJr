import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`incompleted`}>
          {/* nome da tarefa */}
        </p>
        <div>
            {/* criar icones para editar e excluir tarefa */}
            <FontAwesomeIcon className="edit-icon" />
            <FontAwesomeIcon className="delete-icon" />
        </div>
    </div>
  )
}

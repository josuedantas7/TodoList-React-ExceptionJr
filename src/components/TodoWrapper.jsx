import React from "react";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import todos from '../data/todos.json'

export const TodoWrapper = () => {

  // criar estado para as tarefas

  // criar função para deletar tarefa

  // criar função para completar tarefa

  // criar função para editar tarefa
 
  // criar função para editar nome da tarefa

  

  return (
    <div className="TodoWrapper">
      <h1>Adicione sua tarefa</h1>
      {/* formulário para adicionar todo */}
      {/* display todos */}
      {todos.data.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
          />
        )
      )}
    </div>
  );
};

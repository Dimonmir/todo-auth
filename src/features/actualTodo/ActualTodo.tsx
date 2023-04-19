import { ITypeTodo } from "@/shared/store/todoSlice"
import { ToDoItem } from "../todoItem/todoItem"

interface IActualTodo {
  arrTodo:ITypeTodo[]
}

export const ActualTodo = ({arrTodo}:IActualTodo) => {

  return (
    <>
      {
        arrTodo.map((todo) => {
          return <ToDoItem item={todo} key={todo.id} />
        })
      }
    </>
  )
}

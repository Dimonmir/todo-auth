import { ITypeTodo } from "@/shared/store/todoSlice"
import { ToDoItem } from "../todoItem/todoItem"
import { Typography } from "antd"

interface IPastTodo {
  lowArr:ITypeTodo[]
  mediumArr:ITypeTodo[]
  hightArr:ITypeTodo[]
}

export const PriorTodo = ({lowArr, mediumArr, hightArr}:IPastTodo) => {

  return (
    <>
      {
        hightArr.length != 0 &&
        <>
          <Typography.Title level={4}>Выский приоритет</Typography.Title>
          {
            hightArr.map((todo) => {
              return <ToDoItem item={todo} key={todo.id} />
            })
          }
        </>
      }
      {
        mediumArr.length != 0 &&
        <>
          <Typography.Title level={4}>Средний приоритет</Typography.Title>
          {
            mediumArr.map((todo) => {
              return <ToDoItem item={todo} key={todo.id} />
            })
          }
        </>
      }
      {
        lowArr.length != 0 &&
        <>
          <Typography.Title level={4}>Низкий приоритет</Typography.Title>
          {
            lowArr.map((todo) => {
              return <ToDoItem item={todo} key={todo.id} />
            })
          }
        </>
      }
    </>
  )
}

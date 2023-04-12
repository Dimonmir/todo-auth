
import { useAppSelector } from "@shared/store/redux";
import { ToDoItem } from "../../features/todoItem/todoItem";


export default function ToDoList() {

    const todos = useAppSelector(state => state.todos)
    return (
        <>
            {todos.todosArr.map((todo) => {
                return <ToDoItem
                item={todo}
                key={todo.id}
            />
            })}
        </>
    )
}
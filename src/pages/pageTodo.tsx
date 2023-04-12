
import Header from '@widgets/header/header';
import { ToDoItem } from '@features/todoItem/todoItem';
import { useAppSelector } from '@shared/store/redux';
import Form from '@/widgets/form/form';

export default function PageTodo() {
    
    const todos = useAppSelector(state => state.todos)
    
    return (
        <div>
            <Header />
            <Form />
            { todos.todosArr.map((todo) => {
                    return <ToDoItem item={todo} key={todo.id} />
                })
            }
        </div>
    )
}

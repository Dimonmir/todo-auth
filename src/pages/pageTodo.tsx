
import Header from '@widgets/header/header';
import { ToDoItem } from '@features/todoItem/todoItem';
import { useAppSelector } from '@shared/store/redux';
import Form from '@/widgets/form/form';
import { ContainerPage } from './s-pageTodo';
import { useEffect } from 'react';

export default function PageTodo() {
    const todos = useAppSelector(state => state.todos)
    
    useEffect(()=> {

    },[todos])
    
    return (
        <div>
            <Header />
            <ContainerPage>
            <Form />
            { todos.todosArr.map((todo) => {
                    return <ToDoItem item={todo} key={todo.id} />
                })
            }
             </ContainerPage>
        </div>
    )
}


import Header from '@widgets/header/header';
import { ToDoItem } from '@features/todoItem/todoItem';
import { useAppDispatch, useAppSelector } from '@shared/store/redux';
import Form from '@/widgets/form/form';
import { ContainerPage } from './s-pageTodo';
import { useEffect } from 'react';
import { addToken } from '@/entities/session/sessionSlice';
import { db } from '@/main';
import { IUser, addUser } from '@/shared/store/userSlice';
import { query, collection, where, getDoc, doc, getDocs } from 'firebase/firestore';
import { IArrTypeTodo, ITypeTodo, addTodo } from '@/shared/store/todoSlice';

export default function PageTodo() {
    const todos = useAppSelector(state => state.todos)
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const getToDo = async ()=>{
        const q = query(collection(db, "todo"), where("userId", "==", user.uid));
    
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
             let todoAdd:ITypeTodo = {
                userId: user.uid,
                id: doc.data().id,
                title: doc.data().title,
                completed: doc.data().completed,
                dataStart: doc.data().dataStart,
                dataEnd: doc.data().dataEnd,
                prior: doc.data().prior,
            }
            dispatch(addTodo(todoAdd))
        console.log(doc.id, " => ", );
        })
    }



    useEffect(()=> {
        getToDo()
    },[])
    
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

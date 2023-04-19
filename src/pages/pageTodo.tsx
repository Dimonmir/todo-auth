
import Header from '@widgets/header/header';
import { ToDoItem } from '@features/todoItem/todoItem';
import { useAppDispatch, useAppSelector } from '@shared/store/redux';
import Form from '@/widgets/form/form';
import { ContainerPage } from './s-pageTodo';
import { useEffect, useState } from 'react';
import { addToken } from '@/entities/session/sessionSlice';
import { db } from '@/main';
import { IUser, addUser } from '@/shared/store/userSlice';
import { query, collection, where, getDoc, doc, getDocs } from 'firebase/firestore';
import { IArrTypeTodo, ITypeTodo, addTodo } from '@/shared/store/todoSlice';
import { Tabs, Typography } from 'antd';
import { ActualTodo } from '@/features/actualTodo';
import { PriorTodo } from '@/features/priorTodo';
import { Stat } from '@/features/stat';

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
        })
    }

    let pastArr:ITypeTodo[] = [];
    let actualArr:ITypeTodo[] = [];
    let futureArr:ITypeTodo[] = [];
    let lowArr:ITypeTodo[] = [];
    let mediumArr:ITypeTodo[] = [];
    let hightArr:ITypeTodo[] = [];

    todos.todosArr.map((todo) => {
        const dateStart = new Date(todo.dataStart);
        const dateEnd = new Date(todo.dataEnd);
        const unixTimestampS = Math.floor(dateStart.getTime() / 1000);
        const unixTimestampE = Math.floor(dateEnd.getTime() / 1000);

        if (unixTimestampE < Date.now()/1000) {
            pastArr.push(todo)
        }
        if (unixTimestampE > Date.now()/1000) {
            actualArr.push(todo)
        }
        if (unixTimestampS > Date.now()/1000) {
            futureArr.push(todo)
        }
        if (todo.prior == 'low') {
            lowArr.push(todo)
        }
        if (todo.prior == 'medium') {
            mediumArr.push(todo)
        }
        if (todo.prior == 'hight') {
            hightArr.push(todo)
        }
    })



    useEffect(()=> {
        getToDo()
    },[])
    
    return (
        <div>
            <Header />
            <ContainerPage>
            <Form />
            <Tabs
                defaultActiveKey="1"
                items={[
                {
                    label: 'Все',
                    key: '1',
                    children: <ActualTodo arrTodo = {todos.todosArr}/>
                },
                {
                    label: 'Актуальные',
                    key: '2',
                    children: <ActualTodo arrTodo = {actualArr}/>
                },
                {
                    label: 'Прошедие',
                    key: '3',
                    children: <ActualTodo arrTodo = {pastArr}/>
                },
                {
                    label: 'Будущие',
                    key: '4',
                    children: <ActualTodo arrTodo = {futureArr}/>
                },
                {
                    label: 'По приоритетам',
                    key: '5',
                    children: <PriorTodo lowArr = {lowArr} mediumArr = {mediumArr} hightArr = {hightArr}/>
                },
                {
                    label: 'Статистика',
                    key: '6',
                    children: <Stat/> 
                },
                ]}
            />
             </ContainerPage>
        </div>
    )
}

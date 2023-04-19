import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@shared/store/redux";
import { ITypeTodo, toggleTodo, removeTodo } from "@shared/store/todoSlice";
import { ContainerTodoItem } from "./s-tofoItem";
import { Checkbox, Divider, Tooltip, Typography } from "antd";
import { DeleteOutlined, HistoryOutlined } from "@ant-design/icons";
import { db } from "@/main";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import estimate from "@/shared/estimate/estimate";


interface IWrapperTypeTodo {
    item: ITypeTodo
}

export const ToDoItem: React.FunctionComponent<IWrapperTypeTodo> = ({ item }) => {
    
    const [itemPast, setItemPast] = useState(estimate(item.dataEnd))

    const [toogle, setToogle] = useState(false)

    const dispatch = useAppDispatch()

    async function deleteTodo(id: string) {
        await deleteDoc(doc(db, "todo", id))
        .then(()=> {
            dispatch(removeTodo({id}))
        })
    }


    async function toogleTodo(id: string) {
        setToogle(!toogle)
        await updateDoc(doc(db, "todo", id), {
            completed: toogle
        })
        .then(()=> {
            dispatch(toggleTodo({id}))
        })
    }

    useEffect(()=> {
        // toogleTodo(item.id)
    }, [])
    console.log(item.completed, itemPast)
    return (
        <ContainerTodoItem itemComplited={item.completed} itemPast={itemPast}>
            <Checkbox
                checked={item.completed}
                onChange={() => {
                    toogleTodo(item.id)
                }}
            />

            <div className="boxFlexContainer">
                
                <div className="boxFlex">
                    <Typography.Title level={5}>
                        {item.dataStart.split("-").reverse().join("-")}
                    </Typography.Title>

                    <div className="driver"><HistoryOutlined />{Math.floor((Date.parse(item.dataEnd) - Date.parse(item.dataStart)) / (1000*60*60*24))} дней</div>

                    <Typography.Title level={5}>
                        {item.dataEnd.split("-").reverse().join("-")}
                    </Typography.Title>
                </div>

                <Typography.Title level={5} className="body">
                    {item.title}
                </Typography.Title>

            </div>



            <Tooltip title="Delete">
                <DeleteOutlined onClick={
                    () => {
                       deleteTodo(item.id)
                    }} />
            </Tooltip>

        </ContainerTodoItem>
    )
}
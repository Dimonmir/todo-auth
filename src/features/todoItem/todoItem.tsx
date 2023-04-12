import React from "react";
import { useAppDispatch } from "@shared/store/redux";
import { ITypeTodo, toggleTodo, removeTodo } from "@shared/store/todoSlice";
import { ContainerTodoItem } from "./s-tofoItem";
import { Checkbox, Tooltip, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";


interface IWrapperTypeTodo {
    item: ITypeTodo
}

export const ToDoItem: React.FunctionComponent<IWrapperTypeTodo> = ({ item }) => {

    const dispatch = useAppDispatch()

    return (
        <ContainerTodoItem>
            <Checkbox
                checked={item.completed}
                onChange={() => {
                    dispatch(toggleTodo({id:item.id}))
                }}
            />

            <Typography.Title level={5}>
                {item.text}
            </Typography.Title>

            <Tooltip title="Delete">
                <DeleteOutlined onClick={
                    () => {
                        dispatch(removeTodo({id:item.id}))
                    }} />
            </Tooltip>

        </ContainerTodoItem>
    )
}
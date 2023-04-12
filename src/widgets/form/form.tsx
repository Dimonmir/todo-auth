import { useState } from "react";
import { addTodo } from "@/shared/store/todoSlice";
import { useAppDispatch } from "@/shared/store/redux";
import { Button, Grid, Input } from "antd";

export default function Form() {
    const [valueText, setValueText] = useState('')

    const dispatch = useAppDispatch()

    return (
        <>
            <Input
                id="todo-text"
                placeholder="Введите дело"
                onChange={(e) => { setValueText(e.target.value) }}
                value={valueText}
                className="formTextField"
            />
            <Button
                size="large"
                onClick={() => {
                    setValueText("")
                    dispatch(addTodo(valueText))
                    }
                }
            >
                Добавить
            </Button>
        </>
    )
}
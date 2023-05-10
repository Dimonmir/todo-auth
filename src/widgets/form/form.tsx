import { useState } from "react";
import { ITypeTodo, addTodo } from "@/shared/store/todoSlice";
import { useAppDispatch, useAppSelector } from "@/shared/store/redux";
import { Button, DatePicker, DatePickerProps, Grid, Input, Select } from "antd";
import { SBox } from "./s-form";
import { RangePickerProps } from "antd/es/date-picker";
import { db } from "@/main";
import { addUser } from "@/shared/store/userSlice";
import { setDoc, doc } from "firebase/firestore";

const { RangePicker } = DatePicker;

export default function Form() {
    const [valueText, setValueText] = useState('')
    const [valueRange, setValueRange] = useState<[string, string]>(['', ''])
    const [valueSelect, setValueSelect] = useState("medium")

    const user = useAppSelector(store => store.user)
    const dispatch = useAppDispatch()
    console.log(user)
    async function handleAdd(){
        let todoAdd:ITypeTodo = {
            userId: user.uid,
            id: Math.random().toString(36).substr(2, 14),
            title: valueText,
            completed: false,
            dataStart: valueRange[0],
            dataEnd: valueRange[1],
            prior: valueSelect,
        }
        await setDoc(doc(db, "todo", todoAdd.id), todoAdd)
        .then(()=>{
            dispatch(addTodo(todoAdd))
        });
        setValueText("")
        setValueSelect("medium")
    }

    const handlerDataPicker = (value: DatePickerProps['value'] | RangePickerProps['value'], dateString: [string, string] | string) => {
        setValueRange([dateString[0], dateString[1]])
    }

    return (
        <SBox>
            <Input
                id="todo-text"
                placeholder="Введите дело"
                onChange={(e) => { setValueText(e.target.value) }}
                value={valueText}
                className="formTextField"
            />
            <RangePicker
                className="range"
                format="YYYY-MM-DD"
                onChange={handlerDataPicker}
                placement="bottomLeft"
                onFocus={blur}
                inputReadOnly={true}
            />
            <Select
                defaultValue={valueSelect}
                options={[
                    { value: 'higth', label: 'Высокий' },
                    { value: 'medium', label: 'Средний' },
                    { value: 'low', label: 'Низкий' },
                ]}
            />
            <Button
                size="large"
                type="primary"
                onClick={handleAdd}
            >
                Добавить
            </Button>
        </SBox>
    )
}
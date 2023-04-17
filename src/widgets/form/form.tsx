import { useState } from "react";
import { addTodo } from "@/shared/store/todoSlice";
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

    async function handleAdd(){
        let todoAdd:ITodo = {

        }
        await setDoc(doc(db, "users", user.uid), userAdd)
        .then(()=>{
            dispatch(addTodo(valueText))
        })
        .catch((error) => {
          setReq("")
          setErr("Произошла ошибка")
      });
        setValueText("")
        setValueRange(['', ''])
        setValueSelect("medium")
    }

    const handlerDataPicker = (value: DatePickerProps['value'] | RangePickerProps['value'], dateString: [string, string] | string) => {
        setValueRange([dateString[0], dateString[1]])
    }

    console.log(valueRange)

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
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={handlerDataPicker}
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
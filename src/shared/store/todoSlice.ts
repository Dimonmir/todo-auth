import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IArrTypeTodo {
    todosArr: ITypeTodo[]
}

export interface ITypeTodo {
    id: string
    text: string
    completed: boolean
}

const initialState:IArrTypeTodo = {todosArr: []}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action:PayloadAction<string>) {
            state.todosArr.unshift({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todosArr = state.todosArr.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodo(state, action) {
            console.log(action)
            state.todosArr.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
            })
        }

    }
})

export const {addTodo, removeTodo, toggleTodo} =  todoSlice.actions;

export default todoSlice.reducer
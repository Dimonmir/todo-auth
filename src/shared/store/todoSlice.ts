import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IArrTypeTodo {
    todosArr: ITypeTodo[]
}

export interface ITypeTodo {
    userId: string
    id: string
    title: string,
    completed: boolean,
    dataStart: string,
    dataEnd: string,
    prior: string,
}

const initialState:IArrTypeTodo = {todosArr: []}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITypeTodo>) {
            state.todosArr.unshift({
                userId: action.payload.id,
                id: action.payload.id,
                title: action.payload.title,
                completed: false,
                dataStart: action.payload.dataStart,
                dataEnd: action.payload.dataEnd,
                prior: action.payload.prior,
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
        },
        removeAllTodo(state) {
            state.todosArr =[]
        }
    }
})

export const {addTodo, removeTodo, toggleTodo, removeAllTodo} =  todoSlice.actions;

export default todoSlice.reducer
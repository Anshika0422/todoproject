import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [{
        todo: "Todo msg",
        id: 1,
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return(
        useContext(TodoContext)
    )
}

export const TodoProvider = TodoContext.Provider
import { useEffect, useReducer } from 'react'
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [] // intentar parsear todo lo que esta aca que es null y null va a evaluar ese objeto
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init ) // todoReducer pasa la referencia a la funcion. Init inicializa nuestro reducer


    useEffect(() => { //Este useEffect guarda cualquier cambio en el LocalStorage.  se dispara cuando el componente se monta y cuando los todos cambian.
        localStorage.setItem( 'todos', JSON.stringify(todos) ) // el localS es un api de JS no hay que importarlo.
    }, [todos]) // cuando los todos cambian
  

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo, 
        }
        dispatch( action ); // como le mando mi accion al reducer? usando el dispatch. Despacho la accion
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id, 
        })
    };
    
    const handleToggleTodo = (id) => { 
        dispatch({
            type: 'Toggle Todo',
            payload: id, 
        })
    };

    return {
        todos,
        pendingTodosCount:  todos.filter(todo=> !todo.done ).length ,
        todosCount: todos.length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
    }
}

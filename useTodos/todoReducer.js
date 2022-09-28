// {type: [todo remove], payload: id }

export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload]

        case 'Remove Todo': 
            return initialState.filter( todo => todo.id !== action.payload ); 
            
        case 'Toggle Todo': 
            return initialState.map(todo =>{ // con map regresamos un nuevo arreglo x cada uno de los elementos de todo
                
                if( todo.id === action.payload ){ // y vamos a preguntar si el todo.id es igual al que toy mandando por el action.pay
                    return{ 
                        ...todo, // si es asi
                        done: !todo.done // entonces le cambio el done de false a true 
                    }
                }

                return todo; // si no es entonces regreso el mismo todo
            }) 
        
        default:
            return initialState; 
    }
}







/* 

disparo una accion
que va a tener el type de add todo
y deberia tener el payload de que es el todo que quiero insertar

switch (action.type) {
    case 'Add Todo':
        return [...initialState, action.payload]
        // tenemos que tratar de evitar mutar los arreglos 

    case 'Remove Todo': // remueve del estado inicial el todo que quiero eliminar. 
        return initialState.filter( todos = todo.id !== action.payload ); // el filter regresa un nuevo arreglo, no muta los viejos
    // los todos se regresan siempre cuando el todo.id seadiferente! de el nuevo todo.id que recibo en action.payload
    default:
        return initialState; // si no hubo error por default traeme el valor inicial

         */
// el CustomHook es simplemente una funcion que retorna algo: un objeto , un valor, lo que necesitemos que regrese
import { useState } from "react"

export const useCounter = (initialValue = 10) => { 

    const [counter, setCounter] = useState(initialValue) // es un valor inicial que me manda alguien y sino se coloca el 10
    
    // para cambiar el valor de counter
    const increment = (value = 1) => { // si necesitara incrementarlo de x en x 
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        /* if(counter === 0) return; */ // (si el counter es exactamenteIgual a 0) no hagas nada;
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }


}
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null, // producto de la peticion
        isLoading: true,
        hasError: null,
    })
  
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });

        console.log(data);
    }

    useEffect(() => {
        getFetch(); // cuando detecta que se monta nuestro componente se dispara la primera vez 
    }, [url]) // cuando el url cambie se va a volver a disparar , si es el mismo url no hace nada
    
    return{
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
    };
}

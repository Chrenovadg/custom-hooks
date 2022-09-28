import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm ); // mi formState es igual a lo que yo le mande como argumento
    
    const onInputChange = ({target}) => { 
        const {name, value} = target 
    
        setFormState({ 
            ...formState, 
            [ name ] : value 
        });
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return{ // trabajando con objetos en retornos xq es mas facil expandirlo
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    
    }

}

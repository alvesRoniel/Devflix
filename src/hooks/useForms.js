import { useState } from 'react'

function useForm(valoresIniciais) {

    const [formValues, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        // chave: nome, descricao
        setValues({
            ...formValues,
            [chave]: valor, // nome: 'valor'
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        formValues,
        handleChange,
        clearForm
    };
}

export default useForm
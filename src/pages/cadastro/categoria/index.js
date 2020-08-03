import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/formField';

function CadastrarCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [formValues, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
         // chave: nome, descricao
        setValues({
            ...formValues,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {formValues.nome}</h1>

            <form onSubmit={function handleSubmint(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    formValues
                ]);

                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={formValues.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="nome"
                    value={formValues.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={formValues.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastar
                </button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <div>
                <Link to="/">
                    Ir para a home
            </Link>
            </div>


            <div>
                <Link to="/cadastro/video">
                    Cadastrar Video
            </Link>
            </div>
        </PageDefault>
    );
}

export default CadastrarCategoria;
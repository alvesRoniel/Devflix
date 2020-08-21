import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import FormField from '../../../components/FormField';

function CadastrarCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, formValues, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      })

  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.nome}
      </h1>

      <form onSubmit={function handleSubmint(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          formValues,
        ]);

        clearForm();
      }}
      >
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
          name="descricao"
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

        <Button>
          Cadastar
        </Button>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
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

import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastrarCategoria() {

    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState();

    function AlterarValorDoInput(infosDoEvento) {
        setNomeDaCategoria(infosDoEvento.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form onSubmit={function handleSubmint(infosDoEvento) {
                infosDoEvento.preventDefault();

                setCategorias([
                    ...categorias,
                    nomeDaCategoria
                ]);
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input type="text"
                            value={nomeDaCategoria}
                            onChange={AlterarValorDoInput}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                    <input type="text"
                            value={nomeDaCategoria}
                            onChange={AlterarValorDoInput}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                    <input type="color"
                            value={nomeDaCategoria}
                            onChange={AlterarValorDoInput}
                        />
                    </label>
                </div>

                <button>
                    Cadastar
                </button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    );
}

export default CadastrarCategoria;
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  const nome = "Douglas"

    function retornaNome(){
      return nome
    }

    const pessoa = {
      nome: "Vanessa"
    }

    let estaDeDia = false;

    return(
      <> {/* todos os elementos devem estar dentro de uma tag */}
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      <h1>Olá, {nome}!</h1>
      <h1>Olá, {pessoa.nome}!</h1> {/* objeto */}
      {estaDeDia ? 'Bom dia!' : 'Boa noite'} {/* : significa se não */}
      <h2>Subtítulo</h2>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
      </>


    )
}

export default App

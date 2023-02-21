import logo from './logo.svg';
import './App.css';
import imagen from "./img/rick-morty.png"
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const api = await fetch(url);
    const resultadoApiRickMorty = await api.json();
    setCharacters(resultadoApiRickMorty.results);
  }


  console.log(characters)


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters
            characters={characters}
            setCharacters={setCharacters}
          />
        ) : (
          <>
            <img src={imagen} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}


      </header>
    </div>
  );
}

export default App;

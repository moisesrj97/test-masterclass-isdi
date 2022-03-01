import logo from './logo.svg';
import './App.css';
import { useApiGet } from './hooks/useApiGet';
import { useState } from 'react';

function App() {
  const { data, error, loading, apiGet } = useApiGet();
  const [inputState, setInputState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    apiGet(`https://pokeapi.co/api/v2/pokemon/${inputState}`);
    setInputState('');
  };

  return (
    <div className='App'>
      <h1>Get a pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='pokemon-name-input'>Pokemon name:</label>
        <input
          id='pokemon-nam-input'
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <button type='submit'>Search Pokemon</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && !loading && <p>Error: {error.message}</p>}
      {data && !loading && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;

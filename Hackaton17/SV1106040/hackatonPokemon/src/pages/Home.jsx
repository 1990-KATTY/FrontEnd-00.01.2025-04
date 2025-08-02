import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import './Home.css';

function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 15;

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1010');
        const results = await Promise.all(res.data.results.map(p => axios.get(p.url)));
        const fullData = results.map(r => r.data);
        setAllPokemons(fullData);
        setFilteredPokemons(fullData);
      } catch (err) {
        console.error('Error al cargar pokemons:', err);
      }
    };
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    const filtered = allPokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setPage(1);
  }, [search, allPokemons]);

  const totalPages = Math.ceil(filteredPokemons.length / limit);
  const startIndex = (page - 1) * limit;
  const paginated = filteredPokemons.slice(startIndex, startIndex + limit);

  return (
    <>
      {/* 🔍 Barra de búsqueda con botón */}
      <div className="mt-4">
        <SearchBar setSearch={setSearch} />
      </div>

      {/* ⏩ Paginación */}
      <div className="d-flex justify-content-center align-items-center my-4 gap-3">
        <button
          className="btn btn-primary"
          style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          ◀
        </button>
        <span>
          <strong>{page}</strong> de {totalPages}
        </span>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          ▶
        </button>
      </div>

      {/* 📦 Cartas de pokémon */}
      <div className="pokemon-grid px-3">
        {paginated.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default Home;

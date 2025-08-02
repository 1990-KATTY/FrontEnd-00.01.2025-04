import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import pokemonTypes from '../utils/pokemonTypes';
import './PokemonDetail.css';

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(res.data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (loading) return <div className="container mt-5">Cargando...</div>;
  if (!pokemon) return <div className="container mt-5 text-danger">Pokémon no encontrado.</div>;

  const type = pokemon.types[0].type.name;
  const bgColor = pokemonTypes[type] || "#eee";

  return (
    <div className="detail-container" style={{ backgroundColor: bgColor }}>
      <div className="detail-card">
        <h2 className="pokemon-name">
          #{pokemon.id.toString().padStart(3, '0')} {pokemon.name.toUpperCase()}
        </h2>

        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="detail-image"
        />

        <p className="pokemon-type">
          <strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(', ')}
        </p>

        <div className="stats-section">
          {pokemon.stats.map(stat => (
            <div key={stat.stat.name} className="stat-item">
              <div className="stat-name">{stat.stat.name.toUpperCase()}</div>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{ width: `${stat.base_stat}%` }}
                ></div>
              </div>
              <div className="stat-value">{stat.base_stat}</div>
            </div>
          ))}
        </div>

        <div className="extra-info">
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>

        <button 
          className="btn btn-secondary mt-4"
          onClick={() => navigate('/')}
        >
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}

export default PokemonDetail;




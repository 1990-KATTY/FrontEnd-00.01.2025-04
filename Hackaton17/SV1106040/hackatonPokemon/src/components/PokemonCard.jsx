import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import pokemonTypes from '../utils/pokemonTypes.jsx';

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const type = pokemon.types[0].type.name;
  const bgColor = pokemonTypes[type] || "#eee";

  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: bgColor }}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
    >
      <h5 className="text-white">#{pokemon.id.toString().padStart(3, '0')}</h5>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title text-capitalize text-white">{pokemon.name}</h4>
        <div className="text-white">Type: {type}</div>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="stat-line">
            <small>{stat.stat.name.toUpperCase()}</small>
            <div className="stat-bar">
              <div
                className="stat-fill"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;


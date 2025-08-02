import React, { useState } from 'react';

function SearchBar({ setSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearch(input.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="d-flex justify-content-center gap-2 mb-4 px-3 w-100">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Buscar Pokémon..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="btn btn-success" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;

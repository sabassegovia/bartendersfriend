import React, {useState, useEffect} from 'react';

const SearchBar = () => {
  const [searchInput, setInput] = useState('');
  const [query, setQuery] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    let temp = e.target.value;
    setInput(temp);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(searchInput);
    setInput('');
  }

  return (
    <div>in search bar
      <form onSubmit={handleSubmit}>
        <label>Search for brewery: </label>
        <input
          placeholder="search..."
          type="text"
          value={searchInput}
          onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
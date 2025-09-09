import { useState } from 'react';
import API from '../utils/API';

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCharacters(page = 1) {
    setLoading(true);
    const response = await API.get(`character?page=${page}`);
    if (response.data) {
      setCharacters(response.data.results);
      setLoading(false);
    }
    if (response.error) {
      console.log(response.error);
      setLoading(false);
    }
  }

  return {
    characters,
    loading,
    getCharacters,
  };
}

export default useCharacters;

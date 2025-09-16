import { useState } from 'react';
import API from '../utils/API';

function useCharacterById() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCharacter(id) {
    setLoading(true);
    const response = await API.get(`character/${id}`);
    if (response.data) {
      setCharacter(response.data);
      setLoading(false);
    }
    if (response.error) {
      console.log(response.error);
      setLoading(false);
    }
  }

  return {
    character,
    loading,
    getCharacter,
  };
}

export default useCharacterById;

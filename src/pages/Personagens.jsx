import { useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();
  useEffect(() => {
    getCharacters();
  }, []);
  if (loading) {
    <div>Essa merda ta carregando ainda!</div>;
  }
  return <>{characters.map((item) => item.name)}</>;
}

export default Personagens;

import { useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';
import CardCharacter from '../components/CardCharacter';

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();
  useEffect(() => {
    getCharacters();
  }, []);
  if (loading) {
    <div>Essa merda ta carregando ainda!</div>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {characters.map((item) => (
        <CardCharacter key={item.id} character={item} />
      ))}
    </div>
  );
}

export default Personagens;

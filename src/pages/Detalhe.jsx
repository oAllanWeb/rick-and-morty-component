import { useParams } from 'react-router';
import useCharacterById from '../hooks/useCharacterById';
import { useEffect } from 'react';

function Detalhe() {
  const params = useParams();
  const { character, getCharacter, loading } = useCharacterById();
  useEffect(() => {
    getCharacter(params.id);
  }, []);
  if (loading) {
    return <>To buscando essa merda!</>;
  }
  console.log(character);
  return <div>{character.name}</div>;
}

export default Detalhe;

import BadgeStatus from './BadgeStatus';
import Button from './Button';
import { useNavigate } from 'react-router';

function CardCharacter({ character }) {
  const navigate = useNavigate();
  return (
    <div className="border rounded-lg overflow-hidden border-gray-500 m-2 w-80 flex flex-col items-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 bg-top object-cover mb-2"
      />
      <div className="p-4 flex flex-col items-start w-full gap-1">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p>{character.species}</p>
        <BadgeStatus status={character.status} />
        <Button
          onClick={() => {
            navigate(`/personagem/${character.id}`);
          }}
          variant="primary"
          className="w-full"
        >
          Ver mais
        </Button>
      </div>
    </div>
  );
}

export default CardCharacter;

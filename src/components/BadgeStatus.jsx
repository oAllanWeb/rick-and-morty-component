function BadgeStatus({ status }) {
  const statusColors = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  };

  const statusBR = {
    Alive: 'Vivo',
    Dead: 'Morto',
    unknown: 'Desconhecido',
  };

  return (
    <span
      className={
        `inline-block px-2 py-1 text-white text-sm font-bold rounded 
        ${statusColors[status]}`
      }
    >
      {statusBR[status]}
    </span>
  );
}

export default BadgeStatus;

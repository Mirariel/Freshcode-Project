import cards from './DomainCard.json';

function DomainCard () {
  return (
    <>
      {cards.map(c => (
        <li>
          <img src={c.img} alt={c.title} />
          <h4>c.title</h4>
          <span>{c.price}</span>
        </li>
      ))}
    </>
  );
}

export default DomainCard;

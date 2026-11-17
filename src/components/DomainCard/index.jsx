import cards from './DomainCard.json';
import styles from './DomainCard.module.sass';

function DomainCard () {
  return (
    <>
      {cards.map(c => (
        <li className={styles.domainCard}>
          <img src={c.img} alt={c.title} />
          <h4>c.title</h4>
          <span>{c.price}</span>
        </li>
      ))}
    </>
  );
}

export default DomainCard;

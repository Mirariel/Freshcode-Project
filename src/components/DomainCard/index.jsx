  import cards from './DomainCard.json';
  import styles from './DomainCard.module.sass';

  const images = import.meta.glob('../../assets/images/*.{webp,png,jpg,svg}', {
    eager: true,
    import: 'default',
  });

  const getImage = name => images[`../../assets/images/${name}`];

  function DomainCard () {
    return (
      <>
        {cards.map(c => (
          <li className={styles.domainCard}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={getImage(c.img)} alt={c.title} />
            </div>
            <div className={styles.cardInfo}>
              <h4 className={styles.cardTitle}>{c.title}</h4>
              <span className={styles.cardPrice}>${c.price}</span>
            </div>
          </li>
        ))}
      </>
    );
  }

  export default DomainCard;

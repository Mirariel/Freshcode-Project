import DomainCard from '../../components/DomainCard';
import styles from './CardSection.module.sass';

function CardsSection ({ cards, awesome, h3, sectionDescript }) {
  return (
    <section className={styles.domainCardSection}>
      <h3 className={styles.h3}>
        <span className={styles.lightBulb}>{awesome}</span>
        {h3}
      </h3>

      <span className={styles.sectionDescript}>{sectionDescript}</span>
      <ul className={styles.domainCardContainer}>
        <DomainCard cards={cards} />
      </ul>
    </section>
  );
}

export default CardsSection;

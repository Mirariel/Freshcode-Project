import DomainCard from '../../components/DomainCard';
import Header from '../../components/Header';
import styles from "./Home.module.sass"

function Home () {
  return (
    <>
      <Header />
      <section className={styles.domainCardSection}>
        <h3>Popular Domains</h3>
        <span>Browse and interact to get personalized picks</span>
        <ul className={styles.domainCardContainer}>
          <DomainCard />
        </ul>
      </section>
    </>
  );
}

export default Home;

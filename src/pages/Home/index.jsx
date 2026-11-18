import CardsSection from '../../components/CardsSection';
import Header from '../../components/Header';
import styles from './Home.module.sass';

import inspiredCards from '../../assets/cards/DomainCardInspired.json';
import similarCards from '../../assets/cards/DomainCardSimilar.json';

function Home () {
  return (
    <>
      <Header />
      <CardsSection
        cards={inspiredCards}
        h3={'Inspired by what you liked'}
        awesome={<i class='fa-solid fa-lightbulb'></i>}
        sectionDescript={'Curated picks based on your recent activity'}
      />
      <CardsSection
        cards={similarCards}
        h3={'Similar in style'}
        awesome={<i class='fa-solid fa-arrow-right-arrow-left'></i>}
        sectionDescript={'Names with matching characteristics & vibe'}
      />
      <CardsSection
        cards={similarCards}
        h3={'You may also like'}
        awesome={<i class='fa-solid fa-dna'></i>}
        sectionDescript={'More great picks we think you will love'}
      />
    </>
  );
}

export default Home;

import DomainCard from '../../components/DomainCard';
import Header from '../../components/Header';

function Home () {
  return (
    <>
      <Header />
      <section>
        <h3>Popular Domains</h3>
        <span>Browse and interact to get personalized picks</span>
        <ul>
          <DomainCard />
        </ul>
      </section>
    </>
  );
}

export default Home;

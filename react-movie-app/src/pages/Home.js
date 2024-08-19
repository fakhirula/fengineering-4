import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';

function Main() {
  return (
    <main>
      <Hero />
      <Movies title={'Latest Movies'}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;

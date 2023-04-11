import AddCaseForm from "../components/AddCaseForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";

function Main() {
  return (
    <main>
      <Hero />
      <Provinsi image={'https://picsum.photos/400/200'} />
      <AddCaseForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;

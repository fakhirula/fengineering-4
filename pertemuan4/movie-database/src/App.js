import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hello from './components/Hello';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hello name="Fakhirul" major="Informatika" />
      <Hello name="Akmal" major="Informasi" />
      <Footer />
    </div>
  );
}

export default App;

import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CreateMovie from './pages/movie/CreateMovie';
import Popular from './pages/movie/Popular';
import NowPlaying from './pages/movie/NowPlaying';
import TopRated from './pages/movie/TopRated';
import Layout from './Layout';
// import Counter from './components/Counter/Counter';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/now" element={<NowPlaying />}></Route>
            <Route path="/movie/top" element={<TopRated />}></Route>
        </Routes>
    </Layout>
    // <Counter/>
  );
}

export default App;

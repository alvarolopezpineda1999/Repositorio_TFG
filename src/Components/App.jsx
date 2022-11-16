import { MoviesGrid } from './MoviesGrid';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <header>
        {/* <h1 className={styles.title}>Movies</h1> */}
        <Link to='/'>Home</Link>
        <br />
        <Link to='/movie'>Movie</Link>
      </header>
      <main>
        <Routes>
          <Route path='/movie' element={'movie'}></Route>
          <Route path='/' element={'Home'}></Route>
        </Routes>
      </main>
    </Router>
  );
}

/**000esto es una prueba para el repiaosdaposdjpo/ */
/**000esto es una swgunda prueba para el repiaosdaposdjpo/ */

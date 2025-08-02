import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import Header from './components/Header'; // <-- Asegúrate de que esta ruta sea correcta

function App() {
  return (
    <Router>
      <Header /> {/* Header se muestra en todas las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;



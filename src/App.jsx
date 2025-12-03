// Borré los logos y useState porque no los estás usando en este código
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// --- IMPORTACIONES FALTANTES ---
// Asegúrate de que estas rutas coincidan con tus carpetas reales
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      {/* El NavBar va FUERA de Routes para que aparezca siempre */}
      {/* CORRECCIÓN: Usamos etiqueta de autocierre */}
      <NavBar /> 

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por" />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
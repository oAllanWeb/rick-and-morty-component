import './App.css';
import Detalhe from './pages/Detalhe';
import Personagens from './pages/Personagens';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personagens />} />
        <Route path="/personagem/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

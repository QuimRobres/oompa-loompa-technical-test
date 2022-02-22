import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import OompaDetail from './pages/OompaDetail/OompaDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<OompaDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

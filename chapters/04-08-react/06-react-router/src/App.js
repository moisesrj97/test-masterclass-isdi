import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

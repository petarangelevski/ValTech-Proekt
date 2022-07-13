import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Album from './components/Album';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<><Login/></>}/>
        <Route path='/homepage' element={<><HomePage/></>}/>
        <Route path='/album' element={<><Album/></>}/>
        <Route exact path='/image/:id' element={<><Product/></>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/NavBar';
import DetailPage from './component/pages/DetailPage';
import Error from './component/pages/ErrorPage';
import AboutPage from './component/pages/About';
import ListCoins from './component/CoinList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListCoins />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="details/:name" element={<DetailPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

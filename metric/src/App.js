import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/NavBar";
import DetailPage from "./component/pages/DetailPage";
import Error from "./component/pages/ErrorPage";
import AboutPage from "./component/pages/About";
import Crypt from "./component/CryptList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Crypt/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:name" element={<DetailPage />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

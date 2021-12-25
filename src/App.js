import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    // Code Structure Below
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/search" element={<SearchPage />} /> 
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Code Structure Below
// {/* Home */}
//   {/* <Header /> */}
//   {/* <Banner /> */}
//   {/* <Cards /> */}
//   {/* <Footer /> */}

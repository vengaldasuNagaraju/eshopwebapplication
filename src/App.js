import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path='/login' element={<Login />} />

          {/* Checkout Route */}
          <Route path="checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          }/>

          {/* Home Route */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

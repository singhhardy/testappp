
import './App.css';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1> hello test app</h1>
    <Router>
        <div className="app">
          <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/About' element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

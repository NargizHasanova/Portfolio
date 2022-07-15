import './App.css';
import Portfolio from './components/Portfolio.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}

export default App;

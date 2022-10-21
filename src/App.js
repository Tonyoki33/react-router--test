import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home4 from './components/Home4';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route  path='2' element={<Home2 />}/>
        <Route  path='3' element={<Home3 />}/>
        <Route  path='4' element={<Home4 />}/>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;

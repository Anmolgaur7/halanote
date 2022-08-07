import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar/>
     <Router>
        <div className='mt-4'>

        </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

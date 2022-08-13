import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Notestate from "./context/Notes/Notestate.jsx";

function App() {
  return (
    <>
    <Notestate>
    <Navbar/>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </Notestate>
    </>
  );
}

export default App;

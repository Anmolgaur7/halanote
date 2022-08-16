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
import Main from './components/Main';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Notestate>
    <Router>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/main" element={<Main/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </Notestate>
    </>
  );
}

export default App;

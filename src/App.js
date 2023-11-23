
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import LoginForm from './Components/Login';
import RegistrationForm from './Components/Registration';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path="/" element={<Signup/>}/>
        <Route  path="/login" element={<LoginForm/>}/>
        <Route  path="/registration" element={<RegistrationForm/>}/>
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;

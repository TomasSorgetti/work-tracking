import './App.css'
import CreateUser from './Pages/CreateUser';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App


import '../src/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from  "../src/Components/Homepage.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Login from './Elements/Login/Login';
import Register from './Elements/Register/Register';
import AddClub from './Components/AddClub';
import Clubs from './Components/Clubs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addClub" element={<AddClub />} />
          <Route exact path="/clubs" element={<Clubs />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

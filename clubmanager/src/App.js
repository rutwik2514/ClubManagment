
import '../src/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from  "../src/Components/Homepage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Login from './Elements/Login/Login';
import Register from './Elements/Register/Register';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import '../src/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from  "../src/Components/Homepage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

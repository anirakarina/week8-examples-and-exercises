import "./App.css";
import {BrowseRouter, Routes, Route} from 'react-router'
function App() {
  return (
    <>
      <BrowseRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Destinations" element={<Destinations/>}></Route>
        </Routes>
      </BrowseRouter>
    </>
  );
}

export default App;

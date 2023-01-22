import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/About";
import Art from "./Pages/Art";
function App() {
  return (
    <Router>
    <Routes>

    <Route path='/'element={<Home />} />
    
    <Route path='/work' element={<Projects />} />

    <Route path='/about' element={<About />} />

    <Route path='/art' element={<Art />} />
  

    </Routes>
  </Router>
  );
}

export default App;

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './components/About'
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <>
    <div className="mr-36 ml-36">
    <Navbar/>
    <Header />
    <About />
    <Skills />
    <Project />
    </div>
    </>
  );
}

export default App;

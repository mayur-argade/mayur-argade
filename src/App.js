import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './components/About'
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="sm:mr-3 sm:ml-3 md:mr-12 md:ml-12 xl:mr-36 xl:ml-36 ">
    <Navbar/>
    <Header />
    <About />
    <Skills />
    <Project />    
    </div>
    <Footer/>
    </>
  );
}

export default App;

import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
 
    <div className="sm:mr-3 sm:ml-3 md:mr-12 md:ml-12 xl:mr-36 xl:ml-36 font-poppins">
    <Navbar className=""/>
    <Header />
    <About />
    <Project />  
    <Skills />
    <Blogs />
    </div>
    <Footer/>

    </>
  )
}

export default Home
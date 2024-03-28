import './App.css'
import Header from './components/Header'
import Home from "./components/Home"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import {motion} from "framer-motion"


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);


  return (
    <div>
      {  isLoading ?
        <div className='load'>
        <ClipLoader
        color={"white"}
        loading={isLoading}
        size={30}
      />
      </div>
      :
      <>
      <motion.div
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, height: 0 }}
        animate={{ opacity: 1, y: 0, height: 'auto' }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ overflow: 'hidden' }}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </motion.div>
      </>
      }
      </div>
  )
}

export default App

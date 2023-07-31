import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { AnimatePresence, motion } from "framer-motion";
import './App.css'

import Navbar from './components/Navbar'
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}> */}
      <Routes>
        <Route
          index
          element={
            <Home />
          }>
        </Route>
        <Route
          path='about'
          element={
            <About />
          }>
        </Route>
        <Route
          path='projects'
          element={
            <Projects />
          }>
        </Route>
        <Route
          path='contact'
          element={
            <Contact />
          }>
        </Route>
      </Routes>
      {/* </motion.div>
      </AnimatePresence > */}
    </BrowserRouter >
  );
}

export default App;

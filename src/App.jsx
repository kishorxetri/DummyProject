//import { useState } from 'react'
//import './App.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ReadyToHelp from "./components/ReadyToHelp.jsx";
import Stats from "./components/Stats.jsx";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <ReadyToHelp />
      <Stats />
    </>
  )
}

export default App

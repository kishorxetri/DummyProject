//import { useState } from 'react'
//import './App.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ReadyToHelp from "./components/ReadyToHelp.jsx"; // Added this line
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <ReadyToHelp /> {/* Added this line */}
    </>
  )
}

export default App

import { useState } from 'react'
import './styles/reset.css'
import './styles/style.css'
import Header from './components/Header.jsx'
import Formbase from './components/Formbase.jsx'
import CVOutput from './components/CVOutput.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <main>
        <Formbase />
        <CVOutput />
      </main>
    </>
  )
}

export default App

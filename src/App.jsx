import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './components/Results'
import './App.css'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme(){
    setDarkTheme(prev=> !prev)
  }
  return (
    <div className={`container ${darkTheme ? 'dark' : ''}`}>
      <div>
      <Navbar toggleTheme={toggleTheme} dark={darkTheme} />
      <Results dark={darkTheme} />
      <Footer dark={darkTheme} />
      </div>
    </div>
  )
}

export default App

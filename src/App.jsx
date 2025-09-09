import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'
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
      <Routes />
      <Footer />
      </div>
    </div>
  )
}

export default App

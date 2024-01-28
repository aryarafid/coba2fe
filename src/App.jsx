import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <MainPage />
    </>
  )
}

export default App

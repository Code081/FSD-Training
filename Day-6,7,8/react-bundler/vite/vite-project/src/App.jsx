import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import pic1 from "./images/logo-6.png"
import State from './components/State'

function App() {
  

  return (
    <div className='app'> 
    <div className='Counter'>
      <State/>
    </div>
    </div>
  )
}

export default App

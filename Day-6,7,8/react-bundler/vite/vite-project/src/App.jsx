import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import pic1 from "./images/logo-6.png"

function App() {
  

  return (
    <div className='app'> 
    <Card  name = "Shashwat Pandey" img = {pic1} roll = "57"/>
    <Card  name = "Khushi" img = {pic1} roll = "35" />
    <Card name = "Sarthak" img = {pic1} roll = "67" />
    </div>
  )
}

export default App

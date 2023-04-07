import { useState } from 'react'
import './App.css'
import ListeDesSuperNotes from './pages/ListeDesSuperNotes'
import { Routes, Route } from 'react-router-dom'
import DescriptionNotes from './pages/DescriptionNotes'
import PageAuth from './pages/PageAuth'
import CreationNote from './pages/CreationNote'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/Crea" element={<CreationNote/>}/>
        <Route path="/Auth" element={<PageAuth/>}/>
        <Route path="/" element={<ListeDesSuperNotes/>}/>
        <Route path="/Desc" element={<DescriptionNotes/>}/>
      </Routes>    
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom"
import HomeComponent from './Home/HomeComponent'
import ChatComponent from './Chats/ChatComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
        <Route path='/chats' element={<ChatComponent></ChatComponent>}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}> </Route>
      </Routes>
    </div>
  )
}

export default App

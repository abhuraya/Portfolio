import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <MainPage />
      </div>
  )
}

export default App

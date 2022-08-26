import { useState } from 'react'
import portfolioImg from './assets/dibyendu-user.png'
import MainContent from './MainContent'
import './App.css'











function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <MainContent />
    </div>
    
  )
}

export default App

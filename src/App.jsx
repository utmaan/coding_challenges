import { useState } from 'react'

import './App.css'
import PriceCard from './Components/PriceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PriceCard/>
    </>
  )
}

export default App

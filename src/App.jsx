import { useState } from 'react'
import './App.css'
import image from "./assets/image/image.png"
import Card from './component/card/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
      img={image} 
      name="1984" 
      title ="SIYOSAT, FANTASTIKA" 
      type="Audio+Book"/>
    </>
  )
}

export default App

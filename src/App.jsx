import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
         <h1 class="text-3xl font-bold underline text-green-800">
            Hello world!
         </h1>
        Namste Everyone, let's build Netflix GPT
      </div>  
    </>
  )
}

export default App

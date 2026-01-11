import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Bishwjit",
    age: 22
  }
  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="ChaiaurReact" btnText="Click me" content='This is Button 1.'/>
     <Card username = "Bishwjit" btnText="Visit me" content='This is Button 2.'/>
    </>
  )
}

export default App

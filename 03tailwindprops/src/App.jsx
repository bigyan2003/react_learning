import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)


  // create an object 
  let myObj = {
    username : "Bigyan",
    age : 20 
  }
  let newArr = [1,2,3]

  return (
    <>
    {/* TailWind */}
     <h1 className='bg-green-400 text-black p-4
     rounded-xl mb-4'>TailWind Test</h1>
   
    {/* props:- which is used to make resuable component*/}
    {/* <Card username = "bigyan" someObj = {myObj} someArr = {newArr}/> */}
    <Card username = "Bigyan" btntext ="click me"/>
    <Card username = "anish" btntext = "Visit Us"/>
    </>
  )
}

export default App

import { useState } from "react"
import StaticPasswordGenerator from "./components/StaticPasswordGenerator"
import DynamicPasswordGenerator from "./components/DynamicPasswordGenerator"

function App() {
  const [staticState, setStaticState] = useState()
  const [dynamicState, setDynamicState] = useState()

  const handleClick1 = () =>{
    setStaticState(!staticState)
    setDynamicState(false)
  }
  const handleClick2 = () =>{
    setStaticState(false)
    setDynamicState(!dynamicState)
  }

  return (
   <>
    <div className="w-full h-screen flex flex-col bg-slate-200">
      <h1 className="text-center text-2xl w-full font-semibold bg-slate-200 drop-shadow-lg p-3">Strong Password Generators</h1>
      <div className="flex justify-center gap-6 mt-10">
        <button className="bg-red-300 p-2 rounded-lg font-semibold hover:bg-red-400 w-[150px]" onClick={handleClick1}>Static Generator</button>
        <button className="bg-blue-300 p-2 rounded-lg font-semibold hover:bg-blue-400 w-[200px]" onClick={handleClick2}>Dynamic Generator</button>
      </div>
      <div className="">
        {staticState && !dynamicState ? <StaticPasswordGenerator/> : null}
        {dynamicState && !staticState ? <DynamicPasswordGenerator/> : null}
      </div>
    </div>
   </>
  )
}

export default App

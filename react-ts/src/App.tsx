import Box from './Components/Box'

import './App.css'
import Form from './Components/form'
import { useState } from 'react'


function App() {

  const [val , setVal] = useState<string> ("")
  return (
    <>

     <h1>Heloo React </h1>

     <div>
       <Box heading='ajeet'>

          <button>Click me</button>

       </Box>

       <Form   lable='Search' value={val} setter={() => {setVal} } />
  
      
     </div>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import ToDo from './ToDo'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/todo' element={<ToDo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

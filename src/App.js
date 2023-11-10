import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='App'>
     <Router>
        <Routes>
          <Route index element={<h1>Home page</h1>}></Route>
          <Route path='movie/:id' element={<h1>Movie page</h1>}></Route>
          <Route path='movie/:type' element={<h1>Movie Type</h1>}></Route>
          <Route path='/*' element ={<h1>Error Page</h1>}></Route>
        </Routes>
     </Router>
    </div>
  )
}

export default App

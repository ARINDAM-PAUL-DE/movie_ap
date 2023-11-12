import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Header/>
        <Routes>
          <Route index element={<Home/>}></Route> 
          <Route path='movie/:id' element={<h1>Movie page</h1>}></Route>
          <Route path='movie/:type' element={<h1>Movie Type</h1>}></Route>
          <Route path='/*' element ={<h1>Error Page</h1>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App

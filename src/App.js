import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import MovieDetailPage from './pages/MovieDetailPage/Movie';

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Header/>
        <Routes>
          <Route index element={<Home/>}></Route> 
          <Route path='movie/:id' element={<MovieDetailPage/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element ={<h1>Error Page</h1>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App

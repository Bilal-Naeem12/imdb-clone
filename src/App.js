import Navbar from './Component/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Component/Footer';
import MovieList from './Component/MovieList/MovieList';
import Detail from './Page/MovieDetail/Detail';
import { useState } from 'react';
import State from './Context/State';
function App() {


  return (
    <State>
      <Router>
        <Navbar />

        <Routes>


          <Route index element={<Home />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
          <Route path="/movies/:types" element={<MovieList />}></Route>


          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>

        <Footer  />
      </Router>
    </State>
  );
}

export default App;

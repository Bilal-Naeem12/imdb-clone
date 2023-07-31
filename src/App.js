import Navbar from './Component/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Component/Footer';
import MovieList from './Component/MovieList/MovieList';
import Detail from './Page/MovieDetail/Detail';
import { useState } from 'react';
function App() {

const [status, setstatus] = useState(false)
  return (
<Router>
<Navbar/>

<Routes>


  <Route index element={<Home/>}></Route>
  <Route  path="/movie/:id" element={<Detail setstatus={setstatus}/>}></Route>
  <Route  path="/movies/:types" element={<MovieList setstatus={setstatus}/>}></Route>
  

  <Route  path="/*" element={<h1>Error Page</h1>}></Route>
</Routes>

<Footer status={status} />
</Router>
  );
}

export default App;

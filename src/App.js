import Navbar from './Component/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router , Route,Routes,useParams } from 'react-router-dom';
import Home from './Page/Home/Home';
import MovieList from './Component/MovieList/MovieList';
function App() {

  let {types} = useParams()
  return (
<Router>
 <Navbar  active={types} />
<Routes>


  <Route index element={<Home/>}></Route>
  <Route  path="/movie/:id" element={<h1>Movie Page Detail</h1>}></Route>
  <Route  path="/movies/:types" element={<MovieList/>}></Route>

  <Route  path="/*" element={<h1>Error Page</h1>}></Route>
</Routes>


</Router>
  );
}

export default App;

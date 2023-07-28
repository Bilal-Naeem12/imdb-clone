import Navbar from './Component/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
function App() {
  return (
<Router>
 <Navbar />
<Routes>


  <Route index element={<Home/>}></Route>
  <Route  path="/movie/:id" element={<h1>Movie Page Detail</h1>}></Route>
  <Route  path="/movies/:types" element={<h1>Movies list page</h1>}></Route>
  <Route  path="/*" element={<h1>Error Page</h1>}></Route>
</Routes>


</Router>
  );
}

export default App;

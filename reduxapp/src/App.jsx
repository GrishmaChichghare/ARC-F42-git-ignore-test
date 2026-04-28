import {Routes, Route} from 'react-router-dom';
import Men from './components/men.jsx';
import Women from './components/women/index.jsx';
import Kids from './components/kids/index.jsx';
import Cart from './components/cart/index.jsx'; 


const App = () => {
  return <h1>App Component</h1>

  return (
    <Routes>
      <Route path="/men" element={<Men />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/kids" element={<Kids />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  )
}
export default App;
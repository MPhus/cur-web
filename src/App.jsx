import Home from './pages/Homes/Home'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store/Store'
import Other from './pages/Other/Other'
import Detail from '~/pages/Detail/Detail'
import Cart from '~/pages/Cart/Cart'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store-tops' element={<Store type={'top'} />} />
      <Route path='/store-bottoms' element={<Store type={'bottom'} />} />
      <Route path='/store/:id' element={<Detail />} />
      <Route path='/other' element={<Other />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App

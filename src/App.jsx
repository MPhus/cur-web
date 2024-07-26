import Home from './pages/Homes/Home'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store/Store'
import Other from './pages/Other/Other'
import Detail from '~/pages/Detail/Detail'
import Cart from '~/pages/Cart/Cart'
import Login from './pages/Login/Login'
import Management from './pages/Management/Management'
import Admin from './pages/Admin/Admin'
import Checkout from './pages/Checkout/Checkout'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store-tops' element={<Store type={'top'} />} />
      <Route path='/store-bottoms' element={<Store type={'bottom'} />} />
      <Route path='/store/:id' element={<Detail />} />
      <Route path='/other' element={<Other />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/manage' element={<Management />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

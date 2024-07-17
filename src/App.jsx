import Home from './pages/Homes/Home'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store/Store'
import Other from './pages/Other/Other'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/other' element={<Other />} />
    </Routes>
  )
}

export default App

import Home from './pages/Homes/Home'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store/Store'
import AboutCur from './pages/AboutCur/AboutCur'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about-cur' element={<AboutCur />} />
    </Routes>
  )
}

export default App

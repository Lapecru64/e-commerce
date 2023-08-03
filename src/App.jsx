
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
  dispatch(getAllProductsThunk())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      
      </div>
  )
}

export default App

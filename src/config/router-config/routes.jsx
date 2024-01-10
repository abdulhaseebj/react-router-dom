import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Product from '../../screens/product/Product'
import Navbar from '../../components/Navbar'

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
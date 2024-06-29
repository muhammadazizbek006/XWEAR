import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Faq from './pages/Faq'
import KatalogDetail from './pages/KatalogDetail'
import Korzinka from './pages/Korzinka'
import Kontackt from './pages/Kontackt'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/katalog/:type' element={<Katalog/>}/>
        <Route path='/product/:id' element={<KatalogDetail/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/korzinka' element={<Korzinka/>}/>
        <Route path='/kontackt' element={<Kontackt/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
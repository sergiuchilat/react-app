
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import Layout from './components/Layout';
const Home = lazy(() => import('./views/Home'));
const Products = lazy(() => import('./views/Products'));
const Contact = lazy(() => import('./views/Contact'));

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense >
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';


import Layout from './components/Layout';
const Home = lazy(() => import('./views/Home'))
const Contact = lazy(() => import('./views/Contact'))


function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense >
  );
}

export default App;

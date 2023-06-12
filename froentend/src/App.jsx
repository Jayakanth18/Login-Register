import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        </BrowserRouter>
        {/* <Login /> */}
        {/* <Register /> */}
      </div>
    </>
  );
}

export default App;

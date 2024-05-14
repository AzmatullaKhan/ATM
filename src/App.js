import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Opening} from './pages/opening/Opening'
import {MainPage} from './pages/main/Main'
import {Pin} from './pages/pin/Pin'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Opening/>}></Route>
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/pin' element={<Pin/>}></Route>
    </Routes>
  );
}

export default App;

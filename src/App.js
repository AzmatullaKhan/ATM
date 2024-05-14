import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Opening} from './pages/Opening'
import {MainPage} from './pages/Main'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Opening/>}></Route>
      <Route path='/main' element={<MainPage/>}></Route>
    </Routes>
  );
}

export default App;

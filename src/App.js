import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Opening} from './pages/opening/Opening'
import {MainPage} from './pages/main/Main'
import {Pin} from './pages/pin/Pin'
import {Withdrawal} from './pages/withdrawal/Withdrawal'
import {AmountDeducted} from './pages/withdrawal/AmountDeducted'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Opening/>}></Route>
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/pin' element={<Pin/>}></Route>
      <Route path='/withdrawal' element={<Withdrawal/>}></Route>
      <Route path='/savings' element={<AmountDeducted/>}></Route>
      <Route path='/current' element={<AmountDeducted/>}></Route>
      <Route path='/kcc' element={<AmountDeducted/>}></Route>

    </Routes>
  );
}

export default App;

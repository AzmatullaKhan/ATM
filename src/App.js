import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Opening} from './pages/opening/Opening'
import {MainPage} from './pages/main/Main'
import {Pin} from './pages/pin/Pin'
import {Withdrawal} from './pages/withdrawal/Withdrawal'
import {AmountDeducted} from './pages/withdrawal/AmountDeducted'
import {BalanceEnquiry} from './pages/balanceenquiry/BalanceEnquiry'
import {MiniStatement} from './pages/statement/Statement'
import { PinChange } from "./pages/pinchange/PinChnage";
import { GeneratePin } from "./pages/generatepin/GeneratePin";
import { Transfer } from "./pages/transfer/Transfer";
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
      <Route path='/balanceenquiry' element={<BalanceEnquiry/>}></Route>
      <Route path='/ministatement' element={<MiniStatement/>}></Route>
      <Route path='/pinchange' element={<PinChange/>}></Route>
      <Route path='/generatepin' element={<GeneratePin/>}></Route>
      <Route path='/transfer' element={<Transfer/>}></Route>
      <Route path='/fastcash' element={<AmountDeducted/>}></Route>
    </Routes>
  );
}

export default App;

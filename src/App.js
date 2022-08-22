import EarnCrypto from "./pages/EarnCrypto";
import EarnCrypto2 from "./pages/EarnCrypto2";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter> 
   <Routes>
      <Route path={`/`} element={ <EarnCrypto/>}/>
      <Route path={`/EarnCrypto2`} element={ <EarnCrypto2/>}/>
      {/* <Route path={`/fundWallet:${AgentId}`} element={<FundWallet/>}/>
      <Route path={`/sendMoney:${AgentId}`} element={<SendMoney/>}/>
      <Route path={`/withdrawMoney:${AgentId}`} element={<WithdrawMoney/>}/>
      <Route path={`/homePage:${AgentId}`} element={<Homepage/>}/> */}
   </Routes>
   </BrowserRouter>
      {/* <EarnCrypto/> */}
    </div>
  );
}

export default App;

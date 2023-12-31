import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bg from './images/bg.png'
import { InnerLayout, MainLayout, mainLayout } from './style/Layout';
import Orb from './Components/Orb/Orb';
import useWindowSize from './utils/useWindowSize';
import { useEffect, useState, useMemo } from 'react';
import Navigation from './Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Transaction from './Pages/Transaction/Transaction';
import AddTransaction from './Pages/Transaction/AddTransaction';
import Income from './Pages/Income/Income';
import Expense from './Pages/Expense/Expense';
import Loader from './Components/Loader';
import Plan from './Pages/Plan/Plan';
import AddPlan from './Pages/Plan/AddPlan';
import Saving from './Pages/Saving/Saving';

function App() {
  const [active, setActive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])


  // const displayData = () => {
  //   switch (active) {
  //     case 1:
  //       return <Transactions />
  //     case 2:
  //       return <AddTransaction />
  //     case 3:
  //       return <Transactions />
  //     default:
  //       return <Dashboard />
  //   }
  // }

  return (
    <Router>
      <div className="app">
        {/* {orbMemo} */}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main style={{ flex: "1" }}>


            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transaction" element={<Transaction />} />
              {/* <Route path="/income" element={<Income />} /> */}
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/transaction/add-transaction" element={<AddTransaction />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan/add-plan" element={<AddPlan />} />
              <Route path="/saving" element={<Saving />} />

            </Routes>

          </main>
        </MainLayout>
      </div>
    </Router>

  );
}

const AppStyle = styled.div`
background-image:url(${props => props.bg});
position:relative;
height:100vh;
 main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
`

export default App;

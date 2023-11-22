import styled from 'styled-components';
import './App.css';
import bg from './images/bg.png'
import { InnerLayout, MainLayout, mainLayout } from './style/Layout';
import Orb from './Components/Orb/Orb';
import useWindowSize from './utils/useWindowSize';
import { useEffect, useState, useMemo } from 'react';
import Navigation from './Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expense from './Components/Expense/Expense';

function App() {
  const [active, setActive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyle bg={bg} className='app'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
        <main>
          <InnerLayout>
            {displayData()}

          </InnerLayout>
        </main>
      </MainLayout>
    </AppStyle>
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

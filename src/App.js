import './App.css';
import {InfoHeader, InfoCards, PhrenologyTestButton} from './components/information/information'
import {PhrenologyTest} from './components/phrenologytest/phrenologytest'
import {End} from './components/end/end'
import { Routes, Route, useNavigate } from "react-router-dom"


const App = () => {
  const navigator = useNavigate()

  const moveToTest = () => {
    navigator('/phrenologytest');
  }

  const moveToEnd = () => {
    navigator('/end');
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className='information'> 
          <InfoHeader />
          <InfoCards />
          <PhrenologyTestButton handleClick={moveToTest}/>
        </div>
      }/>
      <Route path="/phrenologytest" element={
        <PhrenologyTest handleClick={moveToEnd}/>
      }></Route>
      <Route path="/end" element={
        <End />
      }/>
    </Routes>
  );
}

export default App;

import './App.css';
import {InfoHeader, InfoCards, PhrenologyTestButton} from './components/information/information'
import {PhrenologyTest} from './components/phrenologytest/phrenologytest'
import { Routes, Route, useNavigate } from "react-router-dom"


const App = () => {
  const navigator = useNavigate()

  const moveToTest = () => {
    navigator('/phrenologytest');
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
        <PhrenologyTest />
      }></Route>
    </Routes>
  );
}

export default App;

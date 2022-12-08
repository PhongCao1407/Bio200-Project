import './App.css';
import {InfoHeader, InfoCards, PhrenologyTestButton} from './components/information/information'
import {PhrenologyImage, PhrenologyOptions} from './components/phrenologytest/phrenologytest'
import { Routes, Route, useNavigate } from "react-router-dom"


const App = () => {
  const navigator = useNavigate()

  const test = () => {
    navigator('/phrenologytest');
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className='information'> 
          <InfoHeader />
          <InfoCards />
          <PhrenologyTestButton handleClick={test}/>
        </div>
      }/>
      <Route path="/phrenologytest" element={
        <div className='phrenologytest'>
          <PhrenologyImage/>
          <PhrenologyOptions/>
        </div>
      }></Route>
    </Routes>
  );
}

export default App;

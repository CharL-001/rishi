import React from 'react';
import Header from './comps/Header';
import Login from './comps/Login';
import Signup from'./comps/Signup';
import RegistrationForm from './comps/reg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route  path='/reg' element={<Login/>}/>
        <Route  path='/reg' element={<Signup/>}/>

        <Route  path='/sig' element={<RegistrationForm/>}/>
      </Routes>
    </Router>
  );
}
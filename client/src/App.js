
import './styles/App.css';
import React, { useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import Form from './components/Form';
import { useDispatch,useSelector } from 'react-redux';


function App() {


  function login()
  {




  }


  return (
    <div className="App">
      <Routes>
             <Route path="/" element={<Form login={login} />}/>
         
      </Routes>
    </div>
  );
}

export default App;

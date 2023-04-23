
import './styles/App.css';
import React, { useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Nav from './components/Nav'
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const [access, setAccess] = useState(false);

  const user = useSelector((state)=>
    state.nickname
  ) 

  const navigate = useNavigate();

  useEffect(() => {

    !access && navigate('/');
 }, [access]);


  function login(nickname)
  {

    setAccess(true);
            navigate('/home');


  }
  
  function logOut(access)
  {
     setAccess(access);
  }
   
  
  


  return (
    <div className="App">
      <Routes>
             <Route path="/" element={<Form login={login} />}/>
             <Route path="/home" element={<Nav logOut={logOut}/>}/>
      </Routes>
    </div>
  );
}

export default App;

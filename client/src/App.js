
import './styles/App.css';
import React, { useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Nav from './components/Nav';
import About from './components/About';
import CreateDog from './components/CreateDog';
import Cards from './components/Cards';
import Detail from './components/Detail';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from './redux/actions';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    document.title = 'PI-Dogs';
      dispatch(getDogs());

  },[])

  const [access, setAccess] = useState(false);

  const user = useSelector((state)=>
    state.nickname
  ) 

  const dogs = useSelector((state)=>
    state.dogs
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
   
  function onClose()
  {

  }
  
  return (
    <div className="App">
          {access ? <Nav  logOut={logOut} /> : null }
      <Routes>
             <Route path="/" element={<Form login={login}  />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/home" element={ <Cards  dogs={dogs} onClose={onClose}/>}/>
             <Route path="/dogs/:id" element={ <Detail />}/>
             <Route path="/createdogs/" element={ <CreateDog />}/>
      </Routes>
    </div>
  );
}

export default App;

/* 
 <Route path="*" element={<Error />} />
 */
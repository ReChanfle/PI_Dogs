
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
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs,get_temperament,changePage } from './redux/actions';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    document.title = 'PI-Dogs';
      dispatch(getDogs());
  },[])



  const [access, setAccess] = useState(false);

  const [search_or_all,setSearch] = useState(false);
 
  const dogs = useSelector((state)=> state.dogs);

  const searchDogs = useSelector((state)=> state.search_results);

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
  function onSearch(show)
  {
      setSearch(show);

  }
  function deleteSearch(not_show)
  {
    setSearch(not_show);

  }
  
   
 
  
  return (
    <div className="App">
          {access ? <Nav  logOut={logOut}  onSearch={onSearch} deleteSearch={deleteSearch} /> : null }
        
      <Routes>
             <Route path="/" element={<Form login={login}  />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/home" element={ <><Filter filter={search_or_all} dogs={search_or_all ? searchDogs : dogs} /><Cards  showDogs={search_or_all ? searchDogs : dogs}  /></>}/>
             <Route path="/dogs/:id" element={ <Detail />}/>
             <Route path="/createdogs/" element={ <CreateDog />}/>
      </Routes>
    </div>
  );
}

export default App;

/* 
 <Route path="*" element={<Error />} />
 <Paginate filter={search_or_all}/>
 */

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
import Error from './components/Filter';
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

  const user =  useSelector((state)=> state.nickname);

  const navigate = useNavigate();

  

  useEffect(() => {

    // si el usuario es distinto a undefined se setea el acceso a true
    if(user!=="")
    {
      setAccess(true);
    
    }
    // si el usuario es  undefined se setea el acceso a false y se procede al login
    else if(user==="")
    {
      setAccess(false);
      navigate('/');
    }
    
 }, [user]);

 
  //funcion para cambiar entre buscados o totales
  function onSearch(show)
  {
      setSearch(show);

  }
  //funcion para setear que se muestren los perros totales 
  function deleteSearch(not_show)
  {
    setSearch(not_show);

  }
  
   
  
  return (
    <div className="App">
          {access ? <Nav   onSearch={onSearch} deleteSearch={deleteSearch} /> : null }
        
      <Routes>
             <Route path="/" element={<Form   />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/home" element={ <><Filter filter={search_or_all} dogs={search_or_all ? searchDogs : dogs} /><Cards  showDogs={search_or_all ? searchDogs : dogs}  /></>}/>
             <Route path="/dogs/:id" element={ <Detail />}/>
             <Route path="/createdogs/" element={ <CreateDog />}/>
             <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

/* 
 <Route path="*" element={<Error />} />
 <Paginate filter={search_or_all}/>
 */
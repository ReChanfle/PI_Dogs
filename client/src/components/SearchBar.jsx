import React, { useState } from 'react';
import '../styles/Nav.css';
import { useDispatch,useSelector } from 'react-redux';
import { searchDogs } from '../redux/actions';
export default function SearchBar({onSearch}) {

    const dispatch = useDispatch();
    
    const results = useSelector((state)=> state.search_results);

   const [name, setName] = useState("");

   console.log(results);

  function handleChange(event) {
   console.log("input value ", event.target.value);
    setName(event.target.value);
  }
  function handleKeyDown(event)
  {
    if (event.key === 'Enter') {
       
        dispatch(searchDogs(event.target.value));

       
  }
}



  

   return (
       <>
          <input className="inputs" role="search" onChange={handleChange} onKeyDown={handleKeyDown} type="search" name="search" value={name} placeholder="Ingresa una raza de perro.." />
        
    
         </>
   );
}
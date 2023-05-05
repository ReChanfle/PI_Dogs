import React, { useState } from 'react';
import '../styles/Nav.css';
import { useDispatch,useSelector } from 'react-redux';
import { searchDogs } from '../redux/actions';


export default function SearchBar({onSearch}) {

   const dispatch = useDispatch();
    
   const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleKeyDown(event)
   {
    if (event.key === 'Enter') {
       if(event.target.value)
       {
        dispatch(searchDogs(event.target.value));

        onSearch(true);
    
       }
       
      }
   }

   return (
       <>
          <input className="inputs" role="search" onChange={handleChange} onKeyDown={handleKeyDown} type="search" name="search" value={name} placeholder="Ingresa una raza de perro.." />
        
    
         </>
   );
}
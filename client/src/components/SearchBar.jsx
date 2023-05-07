import React, { useState } from 'react';
import '../styles/Nav.css';
import { useDispatch,useSelector } from 'react-redux';
import { searchDogs } from '../redux/actions';
import { savePage } from '../redux/actions';

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
         //envio datos al reducer para buscar los perros
        dispatch(searchDogs(event.target.value));
        //seteo pagination a 1 para volver al menu principal y no romper el limit de paginas
         dispatch(savePage(1));
         //envio al App el valor de search en true, para que renderice los perros de busqueda
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
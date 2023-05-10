import '../styles/Filter.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_temperament,filterAPI,filterAZ,filterTemp,filterWeight } from '../redux/actions';

export default function Filter({filter}){

    useEffect(()=>{
      
        dispatch(get_temperament());
    
    },[])

    const dispatch = useDispatch();

    const temperaments = useSelector((state)=> state.temperaments);

    function handleTemps(event)
    {
        let dataFromSelect = event.target.value.split(",");
          console.log(filter);
        dispatch(filterTemp({data: dataFromSelect[0],filter: filter}));
    }

    function handleApiOrCustom(event)
    {
        dispatch(filterAPI({data: event.target.value,filter:filter}));
    }

    function handleAz(event)
    {
          
        dispatch(filterAZ({data: event.target.value,filter: filter}));
    }

    function handleWeight(event)
    {
        dispatch(filterWeight({data: event.target.value,filter: filter}));
    }
    
    //useEffect(()=>{
        
   //  },[filter])

        return(
          
            <div className="containerFilter" >
                  <h2>Filters:</h2>
            <div className="custom-select">
            <select   onChange={handleAz} >
                 <option  value="A">A-Z</option>
                 <option value="Z">Z-A</option>
             </select>
             <select   onChange={handleWeight} >
                 <option  value="1">Mayor peso</option>
                 <option value="0">Menor peso</option>
             </select>
           
             <select onChange={handleTemps} >
                            <option disabled readOnly onChange={handleTemps}>Temperaments</option>
                            <option value="All">All</option>
                            {temperaments.map(d => (                    
                                <option value={[d.name,d.id]} key={d.id} className="">{d.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                            ))}
            </select>

             <select  onChange={handleApiOrCustom}  >
                <option  value="All">All</option>
                <option  value="API">API</option>
                <option value="Custom">Custom</option>
             </select>
            </div>
          
           
            
         </div>


        )


}
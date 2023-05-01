import '../styles/Cards.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_temperament,filterAPI,filterAZ,filterTemp,filterWeight } from '../redux/actions';
export default function Filter(search_or_all){

    useEffect(()=>{
      
        dispatch(get_temperament());
        
  
    },[])

    const dispatch = useDispatch();

    const temperaments = useSelector((state)=> state.temperaments);

  
   
      
    function handleTemps(event)
    {
        let dataFromSelect = event.target.value.split(",");
          
        dispatch(filterAPI({data: dataFromSelect[0],filter: search_or_all.filter}));
    }

    function handleApiOrCustom(event)
    {
           

            dispatch(filterAPI({data: event.target.value,filter: search_or_all.filter}));
    }

    function handleAz(event)
    {
          
            dispatch(filterAZ({data: event.target.value,filter: search_or_all.filter}));
    }

    function handleWeight(event)
    {
         
            dispatch(filterWeight({data: event.target.value,filter: search_or_all.filter}));
    }
    
    useEffect(()=>{
        //return ()=> dispatch(original());
     },[])

        return(
            <div class="container" >
            <div class="custom-select">
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
                            {temperaments.map(d => (                    
                                <option value={[d.name,d.id]} key={d.id} className="">{d.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                            ))}
                        </select>

             <select onChange={handleApiOrCustom}  >
             <option  value="API">API</option>
                 <option value="Custom">Custom</option>
             </select>
            </div>
          
           
            
         </div>


        )


}
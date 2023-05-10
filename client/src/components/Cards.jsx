import Card from "./Card";
import '../styles/Cards.css';
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Paginate from './Paginate';
import { savePage } from "../redux/actions";

export default function Cards({showDogs}){

   

    const dispatch = useDispatch();

    // traigo el numero de pagina del reducer para cuando se desmonta el componente se mantenga la posicion
    const getPaginate = useSelector((state)=> state.pagination)
   
    //hago un estado local para guardar el numero de pagina
    const [paginate,setPaginate] = useState(1);

    //cada vez que se aplica un filtro actualizo el numero de pagina para que no quede fuera de rango
    useEffect(() => {

        setPaginate(getPaginate);
      }, [showDogs]);

   

    const limitByPage = 8;

    let limit = Math.floor(showDogs.length/limitByPage);

    if(showDogs.length/limitByPage>limit)
     limit = limit +1;
     

    let start = (paginate-1)*limitByPage;
    let end = paginate*limitByPage;

  
    let test = showDogs.slice(start,end);

    


    function handleClick(event)
    {
              

            if(event.target.value==='prev' && paginate>1)
            {
                dispatch(savePage(paginate-1))
               setPaginate(paginate-1);
              
            }
            if(event.target.value==='next' && paginate<limit)
            {
                dispatch(savePage(paginate+1))
                setPaginate(paginate+1);
               
              
            }
           
              
            
               
    }


    return(
        <div className="cards-container">
            <div className="cards">
            { test && test.map((d)=> {return <Card  key={d.id} d={d} />})}
            </div>
            {<Paginate paginate={paginate} handleClick={handleClick}/>}
       
        
        </div>
         
    )


}
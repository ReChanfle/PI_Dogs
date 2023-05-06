import Card from "./Card";
import '../styles/Cards.css';
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Paginate from './Paginate';
import { savePage } from "../redux/actions";

export default function Cards({showDogs}){

    //cada vez que se aplica un filtro actualizo el numero de pagina para que no quede fuera de rango
    useEffect(() => {

       setPaginate(1);
     }, [showDogs]);

     const dispatch = useDispatch();

     useEffect( () =>  dispatch(savePage(paginate)), [] );

     const getPaginate = useSelector((state)=> state.paginate)
   
     console.log(getPaginate);

    const [paginate,setPaginate] = useState(1);


    let limit = Math.floor(showDogs.length/10);

    if(showDogs.length/10>limit)
     limit = limit +1;
     

    let start = (paginate-1)*10;
    let end = paginate*10;

  
    let test = showDogs.slice(start,end);

    


    function handleClick(event)
    {
              

            if(event.target.value==='prev' && paginate>1)
            {
               setPaginate(paginate-1);
            }
            if(event.target.value==='next' && paginate<limit)
            {
               
                setPaginate(paginate+1);
              
            }
           
              
            
               
    }


    return(
        <div className="cards-container">
            <div className="cards">
            { test && test.map((d)=> {return <Card  key={d.id} d={d}/>})}
            </div>
            {<Paginate paginate={paginate} handleClick={handleClick}/>}
       
        
        </div>
         
    )


}
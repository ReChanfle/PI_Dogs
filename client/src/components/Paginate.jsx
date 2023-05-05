import { useSelector,useDispatch } from "react-redux";
import { changePage,changePageSearch} from "../redux/actions";
import { useEffect,useLayoutEffect } from "react";

export default function Paginate(search_or_all)
{

    const dispatch = useDispatch();

    let paginate = 1;

    let paginateSearch = 1;

   
    useEffect(()=>{ 
       
        dispatch(changePage({data:paginate}));
       
        dispatch(changePageSearch({data:paginateSearch}));
      },[])

    const num = useSelector((state)=> state.pagination);

    const numSearch = useSelector((state)=> state.paginationSearch);

    paginate = num;

    paginateSearch = numSearch;


  
   
    function handleClick(event)
    {
            

            if(event.target.value==='prev' && paginateSearch>1 && search_or_all.filter)
            {
                paginateSearch-=1
               
            }
            if(event.target.value==='next'  && search_or_all.filter)
            {
                paginateSearch+=1
              
            }
            if(event.target.value==='prev' && paginate>1 && !search_or_all.filter)
            {
                paginate-=1
               
            }
            if(event.target.value==='next'  && !search_or_all.filter)
            {
                paginate+=1
               
            }
              
            
                if(search_or_all.filter)
                dispatch(changePageSearch({data:paginateSearch}));
                else
                dispatch(changePage({data:paginate}));
    }


    

    return(
        <div>
            <button onClick={handleClick} value='prev'>PREV</button>
            <p>{search_or_all.filter ? paginateSearch : paginate}</p>
            <button onClick={handleClick}  value='next'>NEXT</button>
        </div>
    )
}
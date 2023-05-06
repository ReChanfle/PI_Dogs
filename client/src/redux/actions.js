import { ADD_NICKNAME,GET_DATA,GET_ID,GET_TEMPERAMENTS,POST_DOGS,RESET_MESSAGE, SEARCH_DOG,FILTER_AZ,FILTER_WEIGHT,FILTER_TEMP,FILTER_API,SAVE_PAGE } from "./action-types";


//rehacer con el back 
export const getDogs=()=>{

    return async function (dispatch)
    {
      const response = await fetch(`http://localhost:3001/dogs`);
      
      const responsJson = await response.json();

      try{
       
        dispatch({type: GET_DATA,payload:responsJson});
      }
      catch(err)
      {
        console.log(err.message);
      }
    }


}
export const get_temperament=()=>{

  return async function (dispatch)
  {
    const response = await fetch(`http://localhost:3001/temperaments`);
    
    const responsJson = await response.json();

    try{
     
      dispatch({type: GET_TEMPERAMENTS,payload:responsJson});
    }
    catch(err)
    {
      console.log(err.message);
    }
  }


}

export const getDogsById=(id)=>{

  return async function (dispatch)
  {
    const response = await fetch(`http://localhost:3001/dogs/${id}`);
    
    const responsJson = await response.json();

    try{
     
      dispatch({type: GET_ID,payload:responsJson});
    }
    catch(err)
    {
      console.log(err.message);
    }
  }

}


export const add_nickname=(nick)=>{

    return{type:ADD_NICKNAME,payload:nick}

}

export const post_dogs=(data)=>{

       

  return async function (dispatch)
  {
    

    const response = await  fetch('http://localhost:3001/createdogs', {method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
     
      const responsJson = await response.json();
    

      try{
       
        dispatch({type:POST_DOGS,payload:responsJson});
      }
      catch(err)
      {
        console.log(err.message);
      }
    }


}

export const resetCreateDog=(data)=>{


      return{type: RESET_MESSAGE,payload:data}

}

export const searchDogs=(name)=>{
 
 
  return async function (dispatch)
  {
    const response = await fetch(`http://localhost:3001/search/?name=${name}`);
    
    const responsJson = await response.json();

    try{
     
      dispatch({type: SEARCH_DOG,payload:responsJson});
    }
    catch(err)
    {
      console.log(err.message);
    }
  }
}

export const filterAZ=(data)=>{

  

  return{type: FILTER_AZ,payload:data}

}



export const filterWeight=(data)=>{

  return{type: FILTER_WEIGHT,payload:data}
  
}
export const filterAPI=(data)=>{

  

  return{type: FILTER_API,payload:data}
  
}
export const filterTemp=(data)=>{


  return{type: FILTER_TEMP,payload:data}
  
}


export const savePage=(data)=> {

  return{type: SAVE_PAGE,payload:data}

}







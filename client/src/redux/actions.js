import { ADD_NICKNAME,GET_DATA,GET_ID,GET_TEMPERAMENTS,POST_DOGS,RESET_MESSAGE } from "./action-types";


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
    

    const response = await  fetch('http://localhost:3001/dogs/create', {method: 'POST',
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

export const resetCreateDog=()=>{


      return{type: RESET_MESSAGE}

}
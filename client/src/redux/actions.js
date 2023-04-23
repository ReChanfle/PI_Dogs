import { ADD_NICKNAME,GET_DATA } from "./action-types";



export const getDogs=()=>{

    return async function (dispatch)
    {
      const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10`);
      
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

export const add_nickname=(nick)=>{

    return{type:ADD_NICKNAME,payload:nick}

}
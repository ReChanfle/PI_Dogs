import { act } from "react-dom/test-utils";
import { ADD_NICKNAME,GET_DATA } from "./action-types";


const initialState = {
   nickname: '',
   dogs:[]
   
  };



const reducer = (state = initialState, action) => {
        switch(action.type)
        {   
            default:
            return state; 
            case ADD_NICKNAME:
                return{
                    ...state,
                    nickname:action.payload
                }
            case GET_DATA:
                return{
                    ...state,
                    dogs : action.payload
                }

        }
    
  }

  export default reducer;
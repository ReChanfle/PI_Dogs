import { act } from "react-dom/test-utils";
import { ADD_NICKNAME,GET_DATA, GET_ID } from "./action-types";


const initialState = {
   nickname: '',
   dogs:[],
   detail:{}
   
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
            case GET_ID:
                return{
                    ...state,
                    detail:action.payload
                }

        }
    
  }

  export default reducer;
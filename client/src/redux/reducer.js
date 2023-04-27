
import { ADD_NICKNAME,GET_DATA, GET_ID, GET_TEMPERAMENTS, POST_DOGS } from "./action-types";


const initialState = {
   nickname: '',
   dogs:[],
   detail:{},
   temperaments: [],
   estadoPostDog: [],
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
            case GET_TEMPERAMENTS:
                return{
                    ...state,
                    temperaments: action.payload
                }
            case POST_DOGS:
                let test =[];
                console.log(action.payload);
                test.push(action.payload);
                return{
                    ...state,
                    estadoPostDog: test
                }

        }
    
  }

  export default reducer;
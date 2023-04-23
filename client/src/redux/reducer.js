import { ADD_NICKNAME } from "./action-types";


const initialState = {
   nickname: '',
   
  };



const reducer = (state = initialState, action) => {
        switch(action.type)
        {   
            default:
            return state; 
            case ADD_NICKNAME:
                console.log(action.payload);
                return{
                    ...state,
                    nickname:action.payload
                }


        }
    
  }

  export default reducer;
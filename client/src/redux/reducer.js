
import { ADD_NICKNAME,FILTER_AZ,GET_DATA, GET_ID, GET_TEMPERAMENTS, POST_DOGS, RESET_MESSAGE,SEARCH_DOG,FILTER_WEIGHT,FILTER_API } from "./action-types";



const initialState = {
   nickname: '',
   dogs:[],
   originalDog: [],
   detail:{},
   temperaments: [],
   estadoPostDog: {
    message: '',
    status: false
   },
   search_results:[],
   originalSearch: []
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
                    dogs : action.payload,
                    originalDog : [...state.dogs]
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
                return{
                    ...state,
                    estadoPostDog: action.payload
                }
            case RESET_MESSAGE:
                return{
                    ...state,
                    estadoPostDog: action.payload
                }
            case SEARCH_DOG:
                return{
                    ...state,
                    search_results: action.payload,
                    originalSearch : [...action.payload]
                }
            case FILTER_AZ:
                if(action.payload.filter)
                {
                    let filtered = [];
                    if(action.payload.data==="A") filtered= state.search_results.reverse();
                        else
                            filtered= state.search_results.reverse();
                          
                    return{
                        ...state,
                        search_results : [...filtered]
                    }
                }
                else
                {
                    let filtered = [];
                    if(action.payload.data==="Z") filtered= state.dogs.reverse();
                        else
                            filtered= state.dogs.reverse();
                           // hay que usar spread operator porque sino react no detecta el cambio de valor, ya que la refderencia no es modificada
                    return{
                        ...state,
                        dogs :  [...filtered]
                    }
                }
            case FILTER_WEIGHT:
                if(action.payload.filter)
                {
                    let filtered = [];
                    if(action.payload.data==="0")
                    {
                        filtered = state.search_results.sort((a, b) => {
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =parseInt(b.weight, 10);
                            if (weigthA < weigthB) {
                              return -1;
                            }
                            if (weigthA > weigthB) {
                              return 1;
                            }
                          
                            // names must be equal
                            return 0;
                          });
                    }
                    else
                    {
                        filtered = state.search_results.sort((a, b) => {
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =parseInt(b.weight, 10);
                            if (weigthA > weigthB) {
                              return -1;
                            }
                            if (weigthA < weigthB) {
                              return 1;
                            }
                          
                            // names must be equal
                            return 0;
                          });
                    }
                    return{
                        ...state,
                        search_results : [...filtered]
                    }
                }
                else
                {
                    let filtered = [];
                    if(action.payload.data==="0")
                    {
                        filtered = state.dogs.sort((a, b) => {
                          
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =parseInt(b.weight, 10);
                          
                            if (weigthA < weigthB) {
                              return -1;
                            }
                            if (weigthA > weigthB) {
                              return 1;
                            }
                          
                           
                            return 0;
                          });
                    }
                    else
                    {
                        filtered = state.dogs.sort((a, b) => {
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =  parseInt(b.weight, 10);
                            if (weigthA > weigthB) {
                              return -1;
                            }
                            if (weigthA < weigthB) {
                              return 1;
                            }
                          
                            // names must be equal
                            return 0;
                          });
                    }
                    return{
                        ...state,
                        dogs : [...filtered]
                    }
                }
            case FILTER_API:
                    if(action.payload.filter)
                    {   
                        console.log(state.originalSearch)
                        state.search_results = [...state.originalSearch];

                        let filtered = [];
                        if(action.payload.data==="Custom")
                         filtered = state.search_results.filter((d)=>  {
                            if(typeof d.id === 'string') 
                                    return d
                         })
                         state.search_results = [...state.originalSearch];
                         if(action.payload.data==="API")
                         filtered = state.search_results.filter((d)=>  {
                            if(typeof d.id === 'number') 
                                return d
                         } )
                         return{
                            ...state,
                            search_results: [...filtered]
                         }
                    }
                    else
                    {
                       
                      state.dogs = [...state.originalDog];
                        let filtered = [];
                        if(action.payload.data==="Custom")
                         filtered = state.dogs.filter((d)=>  {
                            if(typeof d.id === 'string') 
                                    return d
                         })
                         state.dogs = [...state.originalDog];
                         if(action.payload.data==="API")
                         filtered = state.dogs.filter((d)=>  {
                            if(typeof d.id === 'number') 
                                return d
                         } )
                       
                         return{
                            ...state,
                            dogs: [...filtered]
                         }

                    } 
                       
                       
                        
              



        }
    
  }




  export default reducer;
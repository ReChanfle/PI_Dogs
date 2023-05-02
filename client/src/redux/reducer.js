
import { ADD_NICKNAME,FILTER_AZ,GET_DATA, GET_ID, GET_TEMPERAMENTS, POST_DOGS, RESET_MESSAGE,SEARCH_DOG,FILTER_WEIGHT,FILTER_API,CHANGE_PAGE, CHANGE_PAGE_SEARCH } from "./action-types";



const initialState = {
   nickname: '',
   pagination: 1,
   paginationSearch: 1,
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
            case CHANGE_PAGE_SEARCH:
                   
                        if(action.payload.data>0)
                        state.paginationSearch = action.payload.data
                        else
                        state.paginationSearch = 1

               
                        if(state.originalSearch.length>=10)
                        {
                            let limit = Math.floor(state.originalSearch.length/10);
                            if(state.paginationSearch>state.originalSearch.length/10)
                             state.paginationSearch = limit;
     
                             let start = (state.paginationSearch-1)*10;
                             let end = state.paginationSearch*10;
                             if(end>=state.originalSearch.length-1)
                             {
                                 end = state.originalSearch.length-1;
                                 start = state.originalSearch.length-10;
                                
                             }
                             let test = state.originalSearch.slice(start,end);
                             return{
                                ...state,
                                search_results: [...test]
                            }
                        }
                      
                        return{
                            ...state,
                            paginationSearch: 1
                        } 
                case CHANGE_PAGE:
                        if(action.payload.data>0)
                        state.pagination = action.payload.data
                        else
                        state.pagination = 1

                        let start = (state.pagination-1)*10;
                        let end = state.pagination*10;
                        if(end>=state.originalDog.length-1)
                        {
                            end = state.originalDog.length-1;
                            start = state.originalDog.length-10;
                           
                        }
                            
                        let test = state.originalDog.slice(start,end);

                        let limit = Math.floor(state.originalDog.length/10);
                        if(state.pagination>state.originalDog.length/10)
                         state.pagination = limit;
                        
                        return{
                            ...state,
                            dogs: [...test]
                        }
            case FILTER_AZ:
                if(action.payload.filter)
                {
                    let filtered = [];
                            if(action.payload.data==="A")
                            {
                                filtered =  state.search_results.sort(function (a, b) {
                                    if (a.name > b.name) {
                                      return 1;
                                    }
                                    if (a.name < b.name) {
                                      return -1;
                                    }
                                  
                                    return 0;
                                  });
                            }
                            else
                            { 
                                filtered =  state.search_results.sort(function (a, b) {
                                if (a.name < b.name) {
                                  return 1;
                                }
                                if (a.name > b.name) {
                                  return -1;
                                }
                              
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
                 
                            if(action.payload.data==="A")
                            {
                                filtered =  state.dogs.sort(function (a, b) {
                                    if (a.name > b.name) {
                                      return 1;
                                    }
                                    if (a.name < b.name) {
                                      return -1;
                                    }
                              
                                  });
                            }
                            else
                            { 
                                filtered =  state.dogs.sort(function (a, b) {
                                if (a.name < b.name) {
                                  return 1;
                                }
                                if (a.name > b.name) {
                                  return -1;
                                }
                                // a must be equal to b
                                return 0;
                              });

                            }
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
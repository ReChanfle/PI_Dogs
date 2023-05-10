import { ADD_NICKNAME,FILTER_AZ,GET_DATA, GET_ID, GET_TEMPERAMENTS, POST_DOGS, RESET_MESSAGE,SEARCH_DOG,FILTER_WEIGHT,FILTER_API,FILTER_TEMP,SAVE_PAGE } from "./action-types";

const initialState = {
   nickname: '',
   pagination: 1,
   dogs:[],
   originalDog: [],
   detail:[],
   temperaments: [],
   estadoPostDog: {
    message: '',
    status: false
   },
   search_results:[],
   originalSearch: [],
   filteredHome: [],
   filteredSearch:[]
      
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
                    originalDog : [...action.payload],
                    filteredHome : [...action.payload]
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
            case SAVE_PAGE:
                return{
                    ...state,
                    pagination: action.payload
                }
            case POST_DOGS:
                return{
                    ...state,
                    estadoPostDog: action.payload
                }
            case RESET_MESSAGE:
                return{
                    ...state,
                    estadoPostDog: action.payload // mensaje se creacion de perro
                }
            case SEARCH_DOG:
                //se usan 3 arrays distintos para su posterior utilizacion en filtros
                return{
                    ...state,
                    search_results: action.payload,
                    originalSearch : [...action.payload],
                    filteredSearch : [...action.payload]
                }
            
            case FILTER_AZ:
                if(action.payload.filter)
                {
                   
                            if(action.payload.data==="A")
                            {
                                state.filteredSearch =  state.search_results.sort(function (a, b) {
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
                                state.filteredSearch =  state.search_results.sort(function (a, b) {
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
                        search_results : [...state.filteredSearch]
                    }
                }
                else
                {
                  
                 
                            if(action.payload.data==="A")
                            {
                                state.filteredHome =  state.dogs.sort(function (a, b) {
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
                                state.filteredHome =  state.dogs.sort(function (a, b) {
                                if (a.name < b.name) {
                                return 1;
                                }
                                if (a.name > b.name) {
                                return -1;
                                }
                              
                                return 0;
                              });
                               
                            }
                           // hay que usar spread operator porque sino react no detecta el cambio de valor, ya que la referencia no es modificada
                    return{
                        ...state,
                        dogs :  [...state.filteredHome]
                    }
                }
            case FILTER_WEIGHT:
                if(action.payload.filter)
                {
                  
                    if(action.payload.data==="0")
                    {
                        state.filteredSearch = state.search_results.sort((a, b) => {
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
                        state.filteredSearch = state.search_results.sort((a, b) => {
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =parseInt(b.weight, 10);
                            if (weigthA > weigthB) {
                            return -1;
                            }
                            if (weigthA < weigthB) {
                            return 1;
                            }
                          
                            return 0;
                          });
                    }
                    return{
                        ...state,
                        search_results : [...state.filteredSearch]
                    }
                }
                else
                {
                   
                    if(action.payload.data==="0")
                    {
                        state.filteredHome = state.dogs.sort((a, b) => {
                          
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
                        state.filteredHome = state.dogs.sort((a, b) => {
                            const weigthA = parseInt(a.weight, 10);
                            const weigthB =  parseInt(b.weight, 10);
                            if (weigthA > weigthB) {
                              return -1;
                            }
                            if (weigthA < weigthB) {
                              return 1;
                            }
                          
                       
                            return 0;
                          });
                    }
                    return{
                        ...state,
                        dogs : [...state.filteredHome]
                    }
                }
            case FILTER_API:
                    if(action.payload.filter)
                    {   
                       //uso el array temporal para guardar datos antes de filtrar
                      

                        if(action.payload.data==="Custom")
                        {
                            state.pagination = 1;
                            state.search_results = state.filteredSearch.filter((d)=>  {
                          
                                if(!Number(d.id)) 
                                        return d
                             });
                             return{
                                ...state,
                                search_results: [...state.search_results]
                             }
                        }
                       
                       
                         if(action.payload.data==="API")
                         {
                           
                            state.search_results =  state.filteredSearch.filter((d)=>  {
                                if(Number(d.id)) 
                                    return d
                             });
                          
                            return{
                                ...state,
                                search_results: [...  state.filteredSearch]
                             }
                         }
                         
                         if(action.payload.data==="All")
                         {
                            return{
                               ...state,
                               search_results: [... state.originalSearch]
                            }
                         }
                        
                    }
                     if(!action.payload.filter)
                    {
                        if(action.payload.data==="Custom")
                        {
                            //seteo el numero de pagina a 1 ya que si los resultados son menores que el valor anterior se rompe
                            // el paginado
                            console.log(state.dogs);
                           state.pagination = 1;
                            state.filteredHome = state.filteredHome.filter((d)=>  {
                                if(!Number(d.id)) 
                                    return d
                             });
                             console.log(state.dogs);
                             return{
                                ...state,
                                dogs: [...state.filteredHome]
                             }
                        }
                       
                         //state.dogs = [...state.originalDog];
                         if(action.payload.data==="API")
                         {
                          
                            state.dogs = state.filteredHome.filter((d)=>  {
                                if(Number(d.id)) 
                                return d
                             });
                            
                             return{
                                ...state,
                                dogs: [... state.dogs]
                             }
                         }
                       
                         if(action.payload.data==="All")
                         {
                            
                            //state.filteredHome = [...state.originalDog]
                           
                            return{
                               ...state,
                               dogs: [...state.originalDog]
                            }
                         }
                        

                    } 
                case FILTER_TEMP:
                        if(action.payload.filter && action.payload.data!=="All")
                        {
                         
                            state.pagination = 1;
                                state.search_results = state.filteredSearch.filter((d)=>{
                                    if(d.temperament)
                                    return d.temperament.includes(action.payload.data)

                                })
                                return{
                                    ...state,
                                    search_results: [...state.search_results]

                                }
                        }
                         if(!action.payload.filter && action.payload.data!=="All")
                        {
                            console.log(state.dogs);
                            state.pagination = 1;
                            state.dogs = state.filteredHome.filter((d)=>{
                                if(d.temperament)
                                return d.temperament.includes(action.payload.data)
                            

                            })
                            return{
                                ...state,
                                dogs: [...state.dogs]

                            }
                        }
                         if(!action.payload.filter && action.payload.data==="All")
                        {
                            return{
                                ...state,
                                dogs: [...state.filteredHome]

                            }
                        }
                         if(action.payload.filter && action.payload.data==="All")
                        {
                            return{
                                ...state,
                                search_results: [...state.filteredSearch]

                            }
                        }
               

        }
    
  }


  

  export default reducer;


  /*
case CHANGE_PAGE_SEARCH:
                        if(action.payload.data>0)
                        state.paginationSearch = action.payload.data
                        else
                        state.paginationSearch = 1;

                      
                        //si  los resultados devueltos son mayores a 10 se procede a  dividirlos para mostrarlos
                        if(state.filteredSearch.length>=10)
                        {
                           
                         
                            let limit = Math.round(state.originalSearch.length/10);
                           
                          
                             let start = (state.paginationSearch-1)*10;
                             let end = state.paginationSearch*10;
                             if(end>state.filteredSearch.length)
                             {
                                 end = state.filteredSearch.length;
                                 start = state.filteredSearch.length-10;
                                
                             }
                             let test = state.filteredSearch.slice(start,end);
                         

                             if(state.paginationSearch>limit)
                             state.paginationSearch = limit;
                             return{
                                ...state,
                                search_results: [...test]
                            }
                        } 
                        return{
                            ...state,
                            paginationSearch :1
                        }
                      
                       
                case CHANGE_PAGE:
                        if(action.payload.data>0)
                        state.pagination = action.payload.data
                        else
                        state.pagination = 1

                        let start = (state.pagination-1)*10;
                        let end = state.pagination*10;
                        if(end>state.filteredHome.length)
                        {
                            end = state.filteredHome.length;
                            start = state.filteredHome.length-10;
                           
                        }
                            
                        let test = state.filteredHome.slice(start,end);
                        
                        let limit = Math.round(state.filteredHome.length/10);
                        if(state.pagination>limit)
                         state.pagination = limit;


                        
                        return{
                            ...state,
                            dogs: [...test]
                        }


                        TEMPERAMENTSSSSSSSSSSS

                         if(action.payload.filter && action.payload.data!=="All")
                        {
                          //originalTemp es un array compuesto por los elementos de cada pagina
                            let filtered = state.originalSearch.filter((d)=>{

                                    let arrTemps = d.temperament.split(", ");
                                        if(arrTemps.includes(action.payload.data))
                                           return d;

                            })
                         
                            return{
                                ...state,
                                search_results:[...filtered]
                            }
                        }
                         if(!action.payload.filter && action.payload.data!=="All")
                        {
                           
                            let filtered = state.originalDog.filter((d)=>{

                                let arrTemps = d.temperament.split(", ");
                                    if(arrTemps.includes(action.payload.data))
                                       return d;

                                  
                            });
                          
                            return{
                                ...state,
                                dogs:[...filtered]
                            }
                        }
                         if(action.payload.data==="All" && !action.payload.filter )
                        return{
                            ...state,
                            dogs : [...state.originalDog]
                        }
                        if(action.payload.data==="All" && action.payload.filter )
                        return{
                            ...state,
                            search_results : [...state.originalSearch]
                        }
                        
                       

                   
  

  */
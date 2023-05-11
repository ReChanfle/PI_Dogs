import '../styles/CreateDog.css';
import { useState,useEffect } from "react";
import validate from '../validateNewDog';
import { useDispatch,useSelector } from 'react-redux';
import { get_temperament,post_dogs,resetCreateDog,getDogs } from '../redux/actions';



export default function CreateDog()
{

    useEffect(()=>{
        document.title = 'PI-Dogs - Create Dog';
         
      },[]);

      useEffect(()=>{
        return ()=>{document.title = 'PI-Dogs - Home';} 
         
      },[]);
   
    const dispatch = useDispatch();
    
    useEffect(() => {
      
        dispatch(get_temperament());
        }, []);

    const temperaments = useSelector((state)=> state.temperaments);

    const postData = useSelector((state)=> state.estadoPostDog);

    //estado local para almacenar los temperamentos 
    const [arrTemps,setTemps] = useState([]);

    //estado local para enviar los datos al back
    const [data, setData] = useState({
        name: "",
        life_spanMin: '',
        life_spanMax: '',
        temperaments: [],
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        img_url: ''
      });

      //hook para limpiar el form cuando el 
      useEffect(() => {
       
      CleanForm();
         },[postData.message]);
    
    const styleLogo = {
        width: '160px',
        heigth: '160px'
      }

     
    function handleChange(event)
    {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        });
    }

    function handleSearch(event)
    {
         //cuando el usuario clikea sobre el elemento se vacian los estados de temperamentos 
     setTemps([]);
     setData({
        ...data,
        temperaments: [],
     })
    }
  
    function handleSelect(event)
    {



        if(data.temperaments.length<=5){

            let dataFromSelect = event.target.value.split(",");
        
            arrTemps.push(dataFromSelect[0]);
    

            setData({
                ...data,
                temperaments: arrTemps,
            })
        }
  
    }

   
    function clean()
    {
       
            setData({
                name: "",
                life_spanMin: '',
                life_spanMax: '',
                temperaments: [],
                heightMin: '',
                heightMax: '',
                weightMin: '',
                weightMax: '',
                img_url: ''
              })
              setTemps([]);
             
    
    }
   
    function handleSubmit(event)
    {
    
        event.preventDefault();

        dispatch(post_dogs(data));

   
    }

    function CleanForm()
    { 
        if(postData.message=="Perro creado") 
        {
            clean();
            dispatch(getDogs());
        }  
          
        setTimeout(() => {
            dispatch(resetCreateDog({}));
          }, 3000);
    }
    


        return(
            <div className="divFormCreate">
                 <form className="formCreate" onSubmit={handleSubmit}>
                <img src='https://i.postimg.cc/6QcSpb0d/login-img.png'  style={styleLogo} alt="..."/>
                        <p className="title">Create Dog:</p>

                      
                    <div className="input-container ic1">
                        <p className="subtitle">Name:</p>
                        <input className="input" placeholder="Choose a valid name" name="name" onChange={handleChange} value={data.name} />
                        {validate(data).name ? <h1 className="messageValidation">Seems Good</h1>: <h1 className="messageValidation">only letters max 40 chars, minimum 2</h1>}
                        </div>

                    <div className="input-container ic1">
                        <h1 className="subtitle">Height-min:</h1>
                        <input className="input" placeholder="Pick a valid height, only numbers"  name="heightMin" onChange={handleChange} value={data.heightMin} />
                        {validate(data).heightMin ? <h1 className="messageValidation">Seems Good</h1>: <h1 className="messageValidation">Beetwen 1 and 99 and less than height-max</h1>}
                        </div>

                      
                    <div className="input-container ic1">
                        <h1 className="subtitle">Height-max:</h1>
                        <input className="input" placeholder="Pick a valid height, only numbers" name="heightMax" onChange={handleChange} value={data.heightMax} />
                        {validate(data).heightMax ? <h1 className="messageValidation">Seems Good</h1> :  <h1 className="messageValidation">Beetwen 1 and 99 and more than height-max</h1>}
                        </div>

                      
                    <div className="input-container ic1">
                        <h1 className="subtitle">weigth-min:</h1>
                        <input className="input" placeholder="Pick a valid weight, only numbers" name="weightMin" onChange={handleChange} value={data.weightMin} />
                        {validate(data).weightMin ?  <h1 className="messageValidation">Seems Good</h1> : <h1 className="messageValidation">Beetwen 1 and 99 and less than weight-max</h1>}
                        </div>

                       
                    <div className="input-container ic1">
                        <h1 className="subtitle">weigth-max:</h1>
                        <input className="input" placeholder="Pick a valid weight, only numbers" name="weightMax" onChange={handleChange} value={data.weightMax} />
                        {validate(data).weightMax ?  <h1 className="messageValidation">Seems Good</h1> : <h1 className="messageValidation">Beetwen 1 and 99 and more than weight-max</h1>}
                        </div>

                      
                    <div className="input-container ic1">
                        <h1 className="subtitle">lifespan-min:</h1>
                        <input className="input" placeholder="Pick a valid life span, only numbers" name="life_spanMin" onChange={handleChange} value={data.life_spanMin} />
                        {validate(data).life_spanMin ?  <h1 className="messageValidation">Seems Good</h1> :  <h1 className="messageValidation">Beetwen 1 and 99 and less than life-span</h1>}
                        </div>

                        
                    <div className="input-container ic1">
                        <h1 className="subtitle">lifespan-max:</h1>
                        <input className="input" placeholder="Pick a valid life span, only numbers" name="life_spanMax" onChange={handleChange} value={data.life_spanMax} />
                        {validate(data).life_spanMax ? <h1 className="messageValidation">Seems Good</h1> :<h1 className="messageValidation">Beetwen 1 and 99 and more than life-span-min</h1>}
                        </div>

                       
                    <div className="input-container ic1">
                        <h1 className="subtitle">img-url:</h1>
                        <input className="input" placeholder="" name="img_url" onChange={handleChange} value={data.img_url} />
                        {validate(data).img ? <h1 className="messageValidation">Seems good!</h1>: <h1 className="messageValidation">only valids urls</h1>}
                        </div>
                     

                        
                    <div className="input-container ic1">
                        <h1 className="subtitle">Temperament:</h1>
                        <input className="input" readOnly  name="temperaments" onClick={handleSearch} value={data.temperaments} />
                        {validate(data).temperaments===6 ? <h1 className="messageValidation">Limits of temeperaments</h1> : validate(data).temperaments===0 ? <h1 className="messageValidation">You have to choose at least 1 temperament</h1> : <h1 className="messageValidation">You can choose more</h1> }
                        </div>
                        <select className="ic1" onChange={handleSelect}>
                            <option disabled readOnly>Temperaments</option>
                            {temperaments.map(d => (                    
                                <option value={[d.name,d.id]} key={d.id} className="">{d.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                            ))}
                        </select>
                            {
                                validate(data).allOk ?  <button type="submit" className="submit" >Enter App</button> : null
                            },
                            <div>
                                {
                                    postData.status ? <p>{postData.message}</p> : <p>{postData.message}</p>
                                }
                            </div>
                           
                     
                   
                </form>
                
                
                </div>
        )




}
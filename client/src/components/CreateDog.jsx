import '../styles/CreateDog.css';
import { useState,useEffect } from "react";
import validate from '../validateNewDog';
import { useDispatch,useSelector } from 'react-redux';
import { get_temperament,post_dogs } from '../redux/actions';


export default function CreateDog()
{
   
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(get_temperament());
        }, []);


    const temperaments = useSelector((state)=> state.temperaments);

    const postData = useSelector((state)=> state.estadoPostDog);

    const [idTemps, setIdTemps] = useState([]);

    const [arrTemps,setTemps] = useState([]);

    const [data, setData] = useState({
        name: "",
        life_spanMin: 0,
        life_spanMax: 0,
        temperaments: [],
        idTemps: [],
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
      });
    
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
        event.preventDefault();
        //setSearchInput(event.target.value);
        setIdTemps([]);

        setTemps([]);
    
        setData({
        ...data,
        temperaments: arrTemps
    })

    }
  
    function handleSelect(event)
    {
        if(arrTemps.length<6)
        {
            let arr = event.target.value.split(",");

            arrTemps.push(arr[0]);
            
            idTemps.push(arr[1]);

            
            
        }
      
        setData({
            ...data,
            temperaments: arrTemps,
            idTemps: idTemps
        })

      
       
    }
    function handleSubmit(event)
    {

        event.preventDefault();

        dispatch(post_dogs(data));

        console.log("envio a reducer",postData);

    }


        return(
            <div className="divForm">
                 <form className="Form" onSubmit={handleSubmit}>
                <img src='https://i.postimg.cc/6QcSpb0d/login-img.png'  style={styleLogo} alt="..."/>
                        <p className="title">Create Dog:</p>

                        <p className="subtitle">Name:</p>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="name" onChange={handleChange} value={data.name} />
                        {validate(data).name ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">Height-min:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder=""  name="heightMin" onChange={handleChange} value={data.heightMin} />
                        {validate(data).heightMin ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">Height-max:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="heightMax" onChange={handleChange} value={data.heightMax} />
                        {validate(data).heightMax ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">weigth-min:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="weightMin" onChange={handleChange} value={data.weightMin} />
                        {validate(data).weightMin ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">weigth-max:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="weightMax" onChange={handleChange} value={data.weightMax} />
                        {validate(data).weightMax ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">lifespan-min:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="life_spanMin" onChange={handleChange} value={data.life_spanMin} />
                        {validate(data).life_spanMin ? <p>bien</p>: <p>mal</p>}
                        </div>

                        <h1 className="subtitle">lifespan-max:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" name="life_spanMax" onChange={handleChange} value={data.life_spanMax} />
                        {validate(data).life_spanMax ? <p>bien</p>: <p>mal</p>}
                        </div>

                     

                        <h1 className="subtitle">temperament:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="" id="searchTemperaments" name="temperaments" onClick={handleSearch} value={data.temperaments} type="search"/>
                        {validate(data).temperaments ? <p>Limite de temperamentos</p>: <p>puedes agregar mas</p>}
                        </div>
                        <select className="" onChange={handleSelect}>
                            <option disabled selected>Temperaments</option>
                            {temperaments.map(d => (                    
                                <option value={[d.name,d.id]} key={d.id} className="">{d.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                            ))}
                        </select>
                            {
                                validate(data).allOk ?  <button type="submit" className="submit" >Enter App</button> : null
                            }
                     
                   
                </form>
                
                
                </div>
        )




}
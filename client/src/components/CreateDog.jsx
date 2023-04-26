import '../styles/CreateDog.css';
import { useState,useEffect } from "react";
import validate from '../validateNewDog';
import { useDispatch,useSelector } from 'react-redux';
import { get_temperament } from '../redux/actions';





export default function CreateDog()
{
   
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(get_temperament());
        }, []);


    const temperaments = useSelector((state)=> state.temperaments);

    const [searchInput, setSearchInput] = useState("");

    const [data, setData] = useState({
        name: "",
        life_spanMin: 0,
        life_spanMax: 0,
        temperaments: 0,
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
        setSearchInput(event.target.value);

       

        
    }



        return(
            <div className="divForm">
                 <form className="Form">
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
                        <input className="input" placeholder="" name="temperaments" onChange={handleSearch} value={searchInput} type="search"/>
                        </div>

                        <button type="submit" className="submit">Enter App</button>
                   
                </form>
                
                
                </div>
        )




}
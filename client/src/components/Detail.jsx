import '../styles/Detail.css'
import { useParams } from "react-router-dom";
import  { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../styles/Card.css';
import { getDogsById } from '../redux/actions';


export default function Detail()
{
   
    const {id}= useParams();


    const dispatch = useDispatch();

    
    useEffect(() => {
      
        dispatch(getDogsById(id));
      }, []);


      const stateId = useSelector((state)=>
      state.detail)  

      const URL = "https://w7.pngwing.com/pngs/394/518/png-transparent-brown-shiba-inu-doge-weather-shiba-inu-doge-click-doge-snake-doge-miscellaneous-mammal-carnivoran-thumbnail.png";
   

      if(stateId.length>0)
      if(stateId[0].img.includes('undefined') || stateId[0].img=="https://cdn2.thedogapi.com/images/.jpg")
      stateId[0].img = URL;

     
     

  
                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
      
                 return (
                    <div >
                      { stateId.length>0 &&  <div className="containerDetail">
                            <div className="imgWrapper">
                                <img className='imgDetail' src={stateId[0].img} ></img>
                            </div>
                            <div className='infoDetail'>
                                <h3>Name: {stateId[0].name}</h3>
                                <h3>Temperaments:{stateId[0].temperament} </h3>
                                <h3>Life Span: {stateId[0].life_span} </h3>
                                <h3>Weight: {stateId[0].weight} kgs</h3>
                                <h3>Heigth: {stateId[0].height} cms</h3>
                                <h3>ID: {stateId[0].id}</h3>
                                <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                            </div>
                           
                          
                        </div> }
                    
                    </div>
                   
                     );
            
  


        }   

        /*
    <div className="containerDetail">
                            <div className="imgWrapper">
                                <img className='imgDetail' src={stateId[0].img} ></img>
                            </div>
                            <div className='infoDetail'>
                                <h3>Name: {stateId[0].name}</h3>
                                <h3>Life Span: {stateId[0].life_span}</h3>
                                <h3>Weight: {stateId[0].weight}</h3>
                                <h3>Heigth: {stateId[0].height}</h3>
                                <h3>ID: {stateId[0].id}</h3>
                                <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                            </div>
                           
                          
                        </div>


        */
import '../styles/Detail.css'
import { useParams } from "react-router-dom";
import React, { useState,useEffect } from 'react';
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

        console.log(stateId)

     
      /*
      height
: 
            "23 - 29"
            id
            : 
            1
            img
            : 
            "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
            life_span
            : 
            "10 - 12 years"
            name
            : 
            "Affenpinscher"
            temperament
            : 
            "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
            weight
            : 
            "3 - 6"
      */

  
                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
      
                 return (
                    <div >
                      
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
                    </div>
                   
                     );
            
  


        }   
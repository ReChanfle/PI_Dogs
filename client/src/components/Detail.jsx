import '../styles/Card.css'
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

        
     
      

  
                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
      
                 return (
                    <div >
                      
                        <div class="container">
                            <h1>{stateId.bred_group}</h1>
                            <h2>{stateId.origin}</h2>
                            <h3>{stateId.bred_group}</h3>
                            <h4>{stateId.bred_for} </h4>
                            <h5> {stateId.lifespan}</h5>
                          
                            <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                        </div>
                    </div>
                   
                     );
            
  


        }   
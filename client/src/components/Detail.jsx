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

        console.log(stateId)
     
      

  
                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
      
                 return (
                    <div >
                      
                        <div class="container">
                            <h3>{stateId.temperament}</h3>
                          
                          
                            <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                        </div>
                    </div>
                   
                     );
            
  


        }   
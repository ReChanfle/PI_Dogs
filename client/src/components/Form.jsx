import '../styles/Form.css';
import { useState } from "react";
import { add_nickname } from '../redux/actions';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import validateForm from '../validation';

export default function Form()
{

    const [nickname,setNickname] = useState('');

    const [valid,setValid] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const styleLogo = {
        width: '160px',
        heigth: '160px'
      }

    const styleAlert = {

        backgroundColor: '#36f44987',


    }
    const styleAlert2 = {
        backgroundColor: 'rgba(34, 34, 34, 0.558)',
    }

   function  handleInput (event){

        event.preventDefault();
        setNickname(event.target.value);
        setValid(handleError(nickname));
       
    }


    function handleError(nickname)
    {
        
        return validateForm(nickname);
       
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        if(valid && nickname.length>0)
        {
           
            dispatch(add_nickname(nickname));
            navigate('/home');
        }
          
          

    }
   

        return(
            <div className="divForm">
                <form className="form" onSubmit={handleSubmit} >
                <img src='https://i.postimg.cc/6QcSpb0d/login-img.png' style={styleLogo} alt="..."/>
                        <h1 className="title">Nickname:</h1>
                    <div className="input-container ic1">
                        <input className="input" placeholder="Choose Nickname" value={nickname} onChange={handleInput}/>
                        {   
                         nickname.length>0 && valid ? <div className="alert" style={styleAlert}><strong>Seems Good!</strong></div> 
                         : <div className="alert" style={styleAlert2}><strong>Only letters</strong></div>  }

                        <button type="submit" className="submit">Enter App</button>
                    </div>
                </form>
            </div>



        )



}
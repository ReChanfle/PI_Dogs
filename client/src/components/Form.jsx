import '../styles/Form.css';
import { useState } from "react";
import { add_nickname } from '../redux/actions';

export default function Form({login})
{

    const [nickname,SetNickname] = useState('');

    const styleLogo = {
        width: '160px',
        heigth: '160px'
      }

        return(
            <div class="divForm">
                <form  class="Form">
                <img src='https://i.postimg.cc/6QcSpb0d/login-img.png' style={styleLogo} alt="..."/>
                        <h1 class="title">Nickname:</h1>
                    <div class="input-container ic1">
                    <input class="input" placeholder=" "/>
                    <button type="submit" class="submit">Enter App</button>
                    </div>
                </form>
            </div>



        )



}
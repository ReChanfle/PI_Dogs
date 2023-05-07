import '../styles/Detail.css';
import { Link } from 'react-router-dom';
export default function About()
{


    const styleLogo = {
        width: '65px',
        heigth: '65px'
      }
      
    return (
        <div >
                        <div className="containerDetail">
                            <div className="imgWrapper">
                                <img className='imgDetail' src="https://avatars.githubusercontent.com/u/115053873?s=400&u=ffe0b719f545759660e8c78ba4f2d33862537211&v=4" ></img>
                            </div>
                            <div className='infoDetail'>
                                <h1>Author:  </h1>
                                <h3>Sebastian Cabeza</h3>
                                <h1>Proyect:  </h1>
                                <h3>Dogs from henry</h3>
                                <h1>About:</h1>
                                <p>I'm a autodidact programmer thats wants to certificate his programming knowledge through Henry. </p>
                                <p>This is my third proyect from Henry, hope you enjoy.</p>
                                <h1>ID: Classified </h1>
                                <Link  to="https://github.com/ReChanfle" target="_blank">
                                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" style={styleLogo}/> 
                                </Link>
                               
                                
                            </div>
                            <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                          
                        </div> 
                    
                    </div>
     );
}
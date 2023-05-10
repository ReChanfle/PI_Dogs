import '../styles/Card.css'
import { Link } from "react-router-dom";

export default function Card({d}){

    //seteo una img default para los que no tienen img
     const URL = "https://w7.pngwing.com/pngs/394/518/png-transparent-brown-shiba-inu-doge-weather-shiba-inu-doge-click-doge-snake-doge-miscellaneous-mammal-carnivoran-thumbnail.png";
   
     if(d.img.includes('undefined') || d.img=="https://cdn2.thedogapi.com/images/.jpg")
     d.img = URL;


    const styleImg ={
        width: '100%',
        height:'200px',
        borderRadius: "4px"


    }
         
        return(
            <div className="container">
            <div className="wrapper">
               <div className="banner-image"> 
              <img src={d.img} style={styleImg} alt='img_dog' /> 
               </div>
                <h1>{d.name}</h1>
                <p>Temperaments: {d.temperament}</p>
                <p>Weight: {d.weight} kgs</p>
                </div>
            <div className="button-wrapper"> 
                    <Link to={`/dogs/${d.id}`}>
                      <button className="btn outline">Details</button>
                    </Link>
                
            </div>
          
            
           
         </div>

        )



}

/*

 <Link to={`/detail/${character.id}`}>
                      <button class="btn outline">Details</button>
                  </Link>
                  {
                      onClose && <button class="btn fill"  onClick={()=> onClose(character.id)}>DELETE</button>
                  }

                    <p>Temperaments: {d.temperament}</p>
 */
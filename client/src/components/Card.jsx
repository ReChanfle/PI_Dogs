import '../styles/Card.css'
import { Link } from "react-router-dom";


export default function Card({d}){



    const styleImg ={
        width: '100%',
        height:'200px'


    }
         
        return(
            <div className="container" >
            <div className="wrapper" >
               <div className="banner-image"> 
              <img src={d.img} style={styleImg} alt='img_profile' /> 
               </div>
                <h1>{d.name}</h1>
                  <p>Weight: {d.weight}</p>
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
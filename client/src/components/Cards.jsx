import Card from "./Card";
import '../styles/Cards.css';

export default function Cards({dogs,onClose}){
    
       

    return(
        <div className="cards">
            { dogs && dogs.map((d)=> {return <Card  key={d.id} d={d}/>})}
        
        </div>
    )


}
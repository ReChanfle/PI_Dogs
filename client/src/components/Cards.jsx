import Card from "./Card";
import '../styles/Cards.css';

export default function Cards({showDogs}){
    
       console.log(showDogs)

    return(
        <div className="cards">
            { showDogs && showDogs.map((d)=> {return <Card  key={d.id} d={d}/>})}
        
        </div>
    )


}
import '../styles/Cards.css';

export default function Paginate({paginate,handleClick})
{
    

    return(
        <div className="paginate">
            <button className="btn outline" onClick={handleClick} value='prev'>PREV</button>
            <p className="fontPage">{paginate}</p>
            <button  className="btn outline" onClick={handleClick}  value='next'>NEXT</button>
        </div>
    )
}
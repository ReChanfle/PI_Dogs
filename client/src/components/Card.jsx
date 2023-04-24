import '../styles/Card.css'



export default function Card({d}){



    const styleImg ={
        width: '100%',
        height:'200px'


    }
           
        return(
            <div className="container" >
            <div className="wrapper" >
               <div className="banner-image"> 
              <img src={d.url} style={styleImg} alt='img_profile' /> 
               </div>
                <h1>{d.height}</h1>
                  <p>{d.width}</p>
                </div>
            <div className="button-wrapper"> 
           
          
            
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
 */
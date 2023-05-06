const { Dogs, Temperaments} = require('../db');

const URL = `https://api.thedogapi.com/v1/breeds/`;
//detail de perros
async function getDogById(req,res){


   
    const {idRaza} = req.params;
 //chequeo que el params sea numero o no para pedir la info a la APi o al back
        if(Number(idRaza))
            apiId(idRaza,res);
        if(!Number(idRaza))
            localId(idRaza,res);
   
    

}
async function apiId(id,res)
{
    try{ 
        const responseApi = await fetch(`${URL}+${id}`);

        const responseJson = await responseApi.json();


            let arrOneDog = [];
                    
            // mete el objeto dentro de un array para poder mapearlo
            arrOneDog.push(responseJson);
            
            //array parar devolver resultado
            let detailLocal = [];
    
        //hago un mao sobre el objeto para enviarlo al front los datos que necesito
            arrOneDog.map((d) => {
       
                detailLocal.push({id:d.id,name: d.name, img: `https://cdn2.thedogapi.com/images/${d.reference_image_id}.jpg`,height: d.height.metric,weight: d.weight.metric,life_span: d.life_span,temperament:d.temperament});
                        
            })
    
               res.status(200).json(detailLocal);
    
        }
        catch(error)
        {
            res.status(500).end(error.message);
        }


}

async function localId(id,res)
{
    const  responseDb = await Dogs.findOne({where:{id: id },include: {
        model: Temperaments,
        attributes: ['name']
      }})
      
      try{

        let arrOneDog = [];
                    
        arrOneDog.push(responseDb);
        
        //array parar devolver resultado
        let detailLocal = [];


        arrOneDog.map((d) => {

            let names = [];

            d.temperaments.map((t)=>  names.push(t.name) );

            detailLocal.push({id:d.id,name: d.name, img: d.img,height: d.height,weight: d.weight,life_span: d.life_span,temperament:names.join()});
                    
        })

           res.status(200).json(detailLocal);


      }
      catch(error)
      {
          res.status(500).end(error.message);
      }

}



module.exports =  getDogById



/*
 if(typeof idRaza === 'string')
    {
        var responseDb = await Dogs.findOne({where:{id: idRaza },include: {
            model: Temperaments,
            attributes: ['name']
          }}) 
    }
  if(responseDb)
            {
                //se crea array local para guardar el unico resultado devuelto por la peticion a la DB, si no, no se puede mapear
                let arrOneDog = [];
                    
                arrOneDog.push(responseDb);
                
                //array parar devolver resultado
                let detailLocal = [];
 

                arrOneDog.map((d) => {

                    let names = [];

                    d.temperaments.map((t)=>  names.push(t.name) );

                    detailLocal.push({id:d.id,name: d.name, img: d.img,height: d.height,weight: d.weight,life_span: d.life_span,temperament:names.join()});
                            
                })

                   res.status(200).json(detailLocal);
            }



*/

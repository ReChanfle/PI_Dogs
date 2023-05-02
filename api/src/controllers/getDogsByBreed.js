const { Dogs, Temperaments} = require('../db');
const {Op} = require('sequelize');


const URL = `https://api.thedogapi.com/v1/breeds/search?name=`;


async function getDogsByBreed(req,res){ 

    const {name} = req.query;


    if(name)
    {
        try{

            // arra limitado para devolver los primeros 5 resultados de la API
            let responseArrAPI = [];
            let finalArr = [];
            let finalLocals = [];
            let finalAPI = [];
            
            //API
            let responseApi = await fetch(`${URL}${name}`);
            let responseJson = await responseApi.json();
    
            if(responseJson.length>5)
                responseArrAPI = responseJson.slice(0,5);
             else
                responseArrAPI = responseJson;
    
                responseArrAPI.map((d)=>{
    
                    finalAPI.push({id:d.id, name:d.name,img:`https://cdn2.thedogapi.com/images/${d.reference_image_id}.jpg`,height:d.height.metric,weight: d.weight.metric,life_span:d.life_span,temperaments: d.temperament})
    
                })
    
    
            
            //LOCAL
            let localDogs = await Dogs.findAll({where:{name:{  [Op.startsWith]: `${name}%`}},include: {
                model: Temperaments,
                attributes: ['name']
              },  limit: 5 });
           
           
              localDogs.map((d) => {
    
                let names = [];
    
                d.temperaments.map((t)=>  names.push(t.name) );
    
                finalLocals.push({id:d.id,name: d.name, img: d.img,height: d.height,weight: d.weight,life_span: d.life_span,temperament:names.join()});
                         
              })
    
        
            // 2da opcion de union
               /* finalArr.push(localDogs);
                finalArr.push(responseArrAPI);
                finalArr = finalArr.flat(); */
    
                finalArr =  finalLocals.concat(finalAPI);
    
              
    
                    res.status(200).json(finalArr);
          
        
        }
        catch(err)
        {
            res.status(400).json({err: err.message});
        }
    }
    else
    res.status(204).json({error: 'sin parametros de busqueda'});



}


module.exports =  getDogsByBreed



/*







*/
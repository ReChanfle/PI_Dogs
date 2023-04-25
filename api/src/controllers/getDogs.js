const { Temperaments } = require('../db');


const URL = `https://api.thedogapi.com/v1/breeds`;

 async function getDogs(req,res){

    const responseApi = await fetch(`${URL}`);

    const responseDb = await Temperaments.findAll();

    const responseJson = await responseApi.json();
    try{
        
    let arrReponseFront = []
       if(responseJson)
        {
           responseJson.forEach(dog => {
            
                arrReponseFront.push({id: dog.id,img:dog.image.url,name: dog.name,temperament: dog.temperament, weight: dog.weight.metric})

           });

             res.status(200).json(arrReponseFront);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }

}
    
module.exports =  getDogs

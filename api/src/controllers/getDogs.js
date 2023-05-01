const { Dogs,Temperaments } = require('../db');


const URL = `https://api.thedogapi.com/v1/breeds`;

 async function getDogs(req,res){

    let addedTemps = [];

    const responseApi = await fetch(`${URL}`);

    const responseJson = await responseApi.json();

    const responseDb = await Dogs.findAll({include: {
        model: Temperaments,
        attributes: ['name']}});


        responseDb.map((d) => {
    
            let names = [];

            d.temperaments.map((t)=>  names.push(t.name) );

            addedTemps.push({id:d.id,name: d.name, img: d.img,height: d.height,weight: d.weight,life_span: d.life_span,temperament:names.join()});
                     
          })


    try{
        
    let apiObject = []
    let finalResponse = [];

           responseJson.forEach(dog => {
            
            apiObject.push({id: dog.id,img:dog.image.url,name: dog.name,temperament: dog.temperament, weight: dog.weight.metric})

           });
         
           finalResponse = apiObject.concat(addedTemps);

           finalResponse = finalResponse.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

             res.status(200).json( finalResponse);
        

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }

}
    
module.exports =  getDogs

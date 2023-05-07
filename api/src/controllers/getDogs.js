const { Dogs,Temperaments } = require('../db');


const URL = `https://api.thedogapi.com/v1/breeds`;

 async function getDogs(req,res){

    let addedTemps = [];

    const responseApi = await fetch(`${URL}`);

    const responseJson = await responseApi.json();

    const responseDb = await Dogs.findAll({include: {
        model: Temperaments,
        attributes: ['name']}});

        // hago un map sobre la respuesta de la DB ya que los resultados obtenidos 
        //no son el formato que necesito para mostrarlo
        responseDb.map((d) => {
    
            let names = [];
            // por cada iteracion del map creo un array al cual le asigno las string de los temperamentos
            d.temperaments.map((t)=>  names.push(t.name) );
            //creo un objeto nuevo en el formato que quiero para mostrarlo en el front
            addedTemps.push({id:d.id,name: d.name, img: d.img,height: d.height,weight: d.weight,life_span: d.life_span,temperament:names.join()});
                     
          })


    try{
        
    let apiObject = []
    let finalResponse = [];

      //hago lo mismo con el resultado de la API
           responseJson.forEach(dog => {
            
            apiObject.push({id: dog.id,img:dog.image.url,name: dog.name,temperament: dog.temperament, weight: dog.weight.metric})

           });
         
           finalResponse = apiObject.concat(addedTemps);

           // ordeno alfabeticamente los resultados ya que el concatenarlos se desordenan
           finalResponse = finalResponse.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
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

const { Temperaments } = require('../db');

const URL = `https://api.thedogapi.com/v1/breeds`;

async function geTemperaments(req,res){


    const apiTemperaments = await fetch(`${URL}`);

    const responseApi = await apiTemperaments.json();

    const locales = await Temperaments.findAll();


    try{

        if(locales.length!==0)
            res.status(200).json(locales);

       if(responseApi)
        {
            let arrTemperaments =[];

            responseApi.map((t)=> arrTemperaments.push({name: t.name}));
            //saco los elementos null que retorna la peticion
             arrTemperaments = arrTemperaments.filter((t)=> t!=null);

            let responseJson = await Temperaments.bulkCreate(arrTemperaments);

             res.status(200).json(responseJson);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }


  


}


module.exports =  geTemperaments
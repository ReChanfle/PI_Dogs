const { Dogs} = require('../db');
const {Op} = require('sequelize');


const URL = `https://api.thedogapi.com/v1/breeds/search?name=`;

async function getDogsByBreed(req,res){

    const {name} = req.query;

    if(name)
    try{

        // arra limitado para devolver los primeros 5 resultados de la API
        let responseArrAPI = [];
        let finalArr = [];
        
        //API
        let responseApi = await fetch(`${URL}${name}`);
        let responseJson = await responseApi.json();
        
        //LOCAL
        let localDogs = await Dogs.findAll({where:{name:{  [Op.startsWith]: `${name}%`},},  limit: 5});

        if(responseJson.length>5)
            responseArrAPI = responseJson.slice(0,5);
            else
                responseArrAPI = responseJson.slice(0,responseJson.length-1);

        // 2da opcion de union
           /* finalArr.push(localDogs);
            finalArr.push(responseArrAPI);
            finalArr = finalArr.flat(); */

            finalArr = localDogs.concat(responseArrAPI);


                res.status(200).json(finalArr);
      
    
     

       


    }
    catch(err)
    {
        res.status(400).json({err: err.message});
    }
    else
    res.status(204).json();



}


module.exports =  getDogsByBreed
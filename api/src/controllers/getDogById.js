

const URL = `https://api.thedogapi.com/v1/breeds/`;
//detail de perros
async function getDogById(req,res){

    const {idRaza} = req.params;
    console.log(idRaza);
    const responseApi = await fetch(`${URL}+${idRaza}`);

    const responseJson = await responseApi.json();
    try{
        

       if(responseJson)
        {
            var obj = {
                origin:responseJson.origin,
                bred_for:responseJson.bred_for,
                bred_group:responseJson.breed_group,
                lifespan:responseJson.life_span
            }
             res.status(200).json(obj);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }





}

module.exports =  getDogById
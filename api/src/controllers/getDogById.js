

const URL = `https://api.thedogapi.com/v1/breeds/`;

async function getDogById(req,res){

    const {idRaza} = req.params;
    console.log(idRaza);
    const response = await fetch(`${URL}+${idRaza}`);

    const responseJson = await response.json();
    try{
        let data  = responseJson;

       if(data)
        {
            var obj = {
                id: data.id,
                breed: data.name
            }
             res.status(200).json(responseJson);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }





}

module.exports =  getDogById
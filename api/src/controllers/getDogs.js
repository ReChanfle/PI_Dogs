

const URL = `https://api.thedogapi.com/v1/breeds?limit=10&page=0`;

 async function getDogs(req,res){

   

    const response = await fetch(`${URL}`);

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
    
module.exports =  getDogs

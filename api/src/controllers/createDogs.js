
async function createDogs(req,res){

    

    
   /*"id": 2,
  "name": "Afghan Hound",
  "weight": " 50 to 60 pounds",
  "height": "25 to 27 inches at the shoulder",
  "life_span": "10 to 13 years",
  "bred_for": "Coursing and hunting",
   */


    const {id,name,weight,height,life_span,bred_for} = req.body;

    console.log(id,name,weight,height,life_span,bred_for);

    res.status(200).json({id,name,weight,height,life_span,bred_for});






}













module.exports =  createDogs
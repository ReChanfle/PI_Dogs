const DogsModel = require('../models/dogs')
const { Dogs, Temperaments} = require('../db');
const Op = require('sequelize');

async function createDogs(req,res){

    const {name,life_spanMin,life_spanMax,heightMax,heightMin,weightMax,weightMin,temperaments,img_url} = req.body;

    //proximo paso chequear que el nombre del perro no existe en la dt
    const checkIfexist = await Dogs.findOne({where: {name: name}});


    try{

   
    //let tempArray = Object.values(temperaments);
   
        //checkeo que el perro no exista para crearlo
    if(!checkIfexist)
    {
        const newDog = await Dogs.create({
            name: name,
            life_span: `${life_spanMin} - ${life_spanMax} years`,
            height: `${heightMin} - ${heightMax}`, 
            weight: `${weightMin} - ${weightMax}`,
            img: img_url,
           }) 

           const temps = await Temperaments.findAll({where: {name: temperaments  } }); 

           await newDog.addTemperaments(temps);

           res.status(200).json({message: "Perro creado",status: true});
    }
    else
    res.status(200).json({message: "Perro existente",status: true});
  
   
    }
    catch(err){
        res.status(400).json({message: err.message,status: false})
    }
       


   

  

   






}

module.exports =  createDogs

/*


{name: 'asdad', life_spanMin: '3', life_spanMax: '5', temperaments: Array(1), IDs: Array(1), …}
IDs
: 
['1fdcf150-5187-4d84-b740-2a6555d21c8f']
heightMax
: 
"4"
heightMin
: 
"1"
img_url
: 
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F364190%2FASDAD_AllStars_Dungeons_and_Diamonds%2F%3Fl%3Dspanish&psig=AOvVaw3s9ifJECzGPPIX0nihWEVJ&ust=1682699549784000&source=images&cd=vfe&ved=2ahUKEwjysNm4vsr-AhWjuZUCHTCDBLkQjRx6BAgAEAw"
life_spanMax
: 
"5"
life_spanMin
: 
"3"
name
: 
"asdad"
temperaments
: 
['Intelligent']
weightMax
: 
"6"
weightMin
: 
"2"

*/
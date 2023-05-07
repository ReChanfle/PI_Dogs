const { Temperaments } = require('../db');

const URL = `https://api.thedogapi.com/v1/breeds`;

async function geTemperaments(req,res){


    const apiTemperaments = await fetch(`${URL}`);

    const responseApi = await apiTemperaments.json();

    const locales = await Temperaments.findAll();


    try{

        if(locales.length!==0)
        {
          
            return  res.status(200).json(locales);

        }
          

       if(responseApi)
        {

          // array locales para armar el array de objetos que se enviara al front
            let cleanFinalArr = [];

            let arrTemperaments =[];

            let preFinalArrTemperaments = [];

            let finalArr = [];

            let finalObjectArr = [];

            //transformo el array que viene de la API, en un array de objetos con una key name y un value de string de temperamentos
            responseApi.map((t)=>
            {                  
            arrTemperaments.push({temp: t.temperament})

            });
            //saco los elementos null que retorna la peticion
             arrTemperaments = arrTemperaments.filter((t)=> t.temp);



              // hago un map para transformar los temperamentos string en array
             arrTemperaments.map((t)=> {
                let arrString = t.temp.split(" ");

                preFinalArrTemperaments.push(arrString);
                
             })

              //convierte el  array de 2 niveles en 1
             preFinalArrTemperaments= preFinalArrTemperaments.flat();
           
           

             preFinalArrTemperaments.map((t)=>
               {
                    // le saco la coma a todos los temperamentos
                   let aux = t.replace(",","");

                    t = aux;
                    //por ultimo lo pusheo a un nuevo array para que se reflejen los datos
                    finalArr.push(aux);

                   
               }
             )
                // transformo el array de string en un array de objectos name: temperaments
               finalArr.map((t)=> {

                    finalObjectArr.push({name:t})
               })
                //elimino posibles duplicados
                const noDuplicatesApi = [...new Map(finalObjectArr.map(v => [v.name, v])).values()];

                //ordeno alfabeticamente los temperaments
                cleanFinalArr = noDuplicatesApi.sort((a, b) => {
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
              
            //hago un bulkcreate de la tabla temperaments para inicializar todos los temperamentos.
            let responseJson = await Temperaments.bulkCreate(cleanFinalArr);

          

             res.status(200).json(responseJson);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }


}


module.exports =  geTemperaments
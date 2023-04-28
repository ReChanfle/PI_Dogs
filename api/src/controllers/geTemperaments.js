const { Temperaments } = require('../db');

const URL = `https://api.thedogapi.com/v1/breeds`;

async function geTemperaments(req,res){


    const apiTemperaments = await fetch(`${URL}`);

    const responseApi = await apiTemperaments.json();

    const locales = await Temperaments.findAll();


    try{

        if(locales.length!==0)
        {
            //elimino posibles duplicados
            const noDuplicatesLocals = [...new Map(locales.map(v => [v.name, v])).values()];

            return  res.status(200).json(noDuplicatesLocals);


        }
          

       if(responseApi)
        {
            let cleanFinalArr = [];

            let arrTemperaments =[];

            let preFinalArrTemperaments = [];

            let finalArr = [];

            let finalObjectArr = [];

            responseApi.map((t)=>
            { 
            arrTemperaments.push({temp: t.temperament})

            });
            //saco los elementos null que retorna la peticion
             arrTemperaments = arrTemperaments.filter((t)=> t.temp);




             arrTemperaments.map((t)=> {
                let arrString = t.temp.split(" ");

                preFinalArrTemperaments.push(arrString);
                
             })

              //convierte el de 2 niveles en un array
             preFinalArrTemperaments= preFinalArrTemperaments.flat();
             // saco resultados repetidos
           

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
              
            //hago un bulkcreate de la tabla temperaments para inicializar todos los temperamentos.
            let responseJson = await Temperaments.bulkCreate(noDuplicatesApi);

             res.status(200).json(responseJson);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }


}


module.exports =  geTemperaments
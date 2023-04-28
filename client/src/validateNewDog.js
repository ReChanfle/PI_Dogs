

export default function validate(data)
{
        const regexNickname = /^[a-zA-Z\s]*$/;
        const regexCheckNumber = /[1-9]+$/;

        var obj ={
                name: false,
                life_spanMin: false,
                life_spanMax: false,
                heightMin: false,
                heightMax: false,
                weightMin: false,
                weightMax: false,
                temperaments: 0,
                allOk: false
        }
         
          
        if(regexNickname.test(data.name) && data.name.length<40 && data.name.length>0)  
        obj.name = true;
                        else obj.name = false;
               
        if(regexCheckNumber.test(data.life_spanMin)  && data.life_spanMin<data.life_spanMax) 
        obj.life_spanMin = true; 
                        else  obj.life_spanMin = false;

        if(regexCheckNumber.test(data.life_spanMax) && data.life_spanMax>data.life_spanMin) 
        obj.life_spanMax = true; 
                         else obj.life_spanMax = false;

        if(regexCheckNumber.test(data.heightMin)  && data.heightMin<data.heightMax)  
        obj.heightMin = true; 
                        else obj.heightMin = false; 

        if(regexCheckNumber.test(data.heightMax) && data.heightMax>data.heightMin )  
        obj.heightMax = true;
                        else
                        obj.heightMax = false;

        if(regexCheckNumber.test(data.weightMin)  && data.weightMin<data.weightMax) 
        obj.weightMin = true;
                        else
                        obj.weightMin = false;

        if(regexCheckNumber.test(data.weightMax) && data.weightMax>data.weightMin )  
        obj.weightMax = true;
                        else
                        obj.weightMax = false;

                       
        obj.temperaments = data.temperaments.length;
          
                

        if(obj.name && obj.heightMax && obj.heightMin && obj.life_spanMax && obj.life_spanMin && obj.temperaments && obj.weightMax && obj.weightMin)
        obj.allOk = true;
        
        
        
        return obj;

        
                       
                

        



} 



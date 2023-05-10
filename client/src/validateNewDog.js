

export default function validate(data)
{
        const regexNickname = /^[a-zA-Z\s]*$/;
        const regexCheckNumber = /[0-9]+$/;
        const regexURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

        var obj ={
                name: false,
                life_spanMin: false,
                life_spanMax: false,
                heightMin: false,
                heightMax: false,
                weightMin: false,
                weightMax: false,
                img: false,
                temperaments: 0,
                allOk: false
        }
                let test1 = Number(data.life_spanMin)
                let test2 = Number(data.life_spanMax)
                console.log( Number(data.life_spanMin)<Number(data.life_spanMax));
          
        if(regexNickname.test(data.name) && data.name.length<40 && data.name.length>0 )  
        obj.name = true;
                else obj.name = false;
               
        if(regexCheckNumber.test(data.life_spanMin)  &&Number(data.life_spanMin)<Number(data.life_spanMax) && data.life_spanMin<100 && data.life_spanMin>0) 
        obj.life_spanMin = true; 
                else  obj.life_spanMin = false;

        if(regexCheckNumber.test(data.life_spanMax) && Number(data.life_spanMin)<Number(data.life_spanMax) && data.life_spanMax<100 && data.life_spanMax>0) 
        obj.life_spanMax = true; 
                else obj.life_spanMax = false;

        if(regexCheckNumber.test(data.heightMin)  && Number(data.heightMin)<Number(data.heightMax) && data.heightMin<100 && data.heightMin>0)  
        obj.heightMin = true; 
                else obj.heightMin = false; 

        if(regexCheckNumber.test(data.heightMax) && Number(data.heightMin)<Number(data.heightMax) && data.heightMax<100 && data.heightMax>0)  
        obj.heightMax = true;
                else obj.heightMax = false;

        if(regexCheckNumber.test(data.weightMin)  && Number(data.weightMin)<Number(data.weightMax) && data.weightMin<100 && data.weightMin>0) 
        obj.weightMin = true;
                else obj.weightMin = false;

        if(regexCheckNumber.test(data.weightMax) && Number(data.weightMin)<Number(data.weightMax)  && data.weightMax<100 && data.weightMax>0)  
        obj.weightMax = true;
                else obj.weightMax = false;
        if(regexURL.test(data.img_url))
        obj.img = true;
                else obj.img = false;

                       
        obj.temperaments = data.temperaments.length;
          
                

        if(obj.name && obj.heightMax && obj.heightMin && obj.life_spanMax && obj.life_spanMin && obj.temperaments>0 && obj.weightMax && obj.weightMin)
        obj.allOk = true;
        
        
        
        return obj;

        
                       
                

        



} 



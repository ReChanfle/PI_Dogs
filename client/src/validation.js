
export default function validateForm(nickname)
{
    
    const regexNickname = /^[A-Za-z]+$/;

    if(regexNickname.test(nickname) && nickname.length>0)
            return true
            else
            return false;



}
function swapCase(content){
    number = 0
    result = ""
    for(let i=0; i < content.length; i++){
        number = content.charCodeAt(i)

        //convert uppercase to lowercase
        if(number >= 65 && number <= 90){
            result += String.fromCharCode(number + 32)
            continue
        }
        //convert lowercase to uppercase
        if(number >= 97 && number <= 122){
            result += String.fromCharCode(number - 32)
            continue
        }
        
        result += content[i]
    }
    console.log(result);
}

swapCase("645456 UneChaiNeD645ECaractere")
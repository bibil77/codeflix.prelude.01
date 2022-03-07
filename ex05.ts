function decapitalize(str =''){
    let result = ''
    for( let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<= 90 && i == 0){
            result += str[i].toLowerCase()
        }else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 && str[i-1] == " "){
            result += str[i].toLowerCase()
        }else {
            result += str[i]
        }
    }
    return result
}

console.log(decapitalize("ChaIne de CaracTère"));

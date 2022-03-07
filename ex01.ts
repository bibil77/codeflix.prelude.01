function lowerCase(str = '') {
    let number:number = 0
    let result:string = ''
    for( let i = 0; i < str.length; i++) {
        number = str.charCodeAt(i)   
        if(number >= 65 && number <= 90){
            number += 32
            result += String.fromCharCode(number)
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(lowerCase("Chaine De Caractère"))
function UpperCase(str = '') {
    let number:number = 0
    let result:string = ''
    for( let i = 0; i < str.length; i++) {
        number = str.charCodeAt(i)   
        if(number >= 97 && number <= 122){
            number -= 32
            result += String.fromCharCode(number)
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(UpperCase("StriiiiinnnnnG"))
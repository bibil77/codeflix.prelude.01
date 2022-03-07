function Capitalize(str='', restToLoweropt=false) {
    if (restToLoweropt == false ) {
        return `${str[0].toUpperCase()}${str.slice(1, str.length)}`
        
    }else {
        return `${str[0].toUpperCase()}${str.toLowerCase().slice(1, str.length)}`
        
    }
}
console.log(Capitalize("chaine de Caractère", false));

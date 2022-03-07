function Length(str = ""){

    // for(let i = 0; true; i++){
    //     if(str[i] == undefined){
    //         return i
    //     }
    // }
    let i = 0
    while (str[i]) {
        i++ 
    }
    return i 
}

console.log(Length("chaine de caractère"));



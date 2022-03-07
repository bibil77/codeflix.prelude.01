function first(content, len=1){
    result = ""
    for(let i=0; i < len; i++){
        result += content[i]
    }
    console.log(result);
}

first("zeubi", 5)
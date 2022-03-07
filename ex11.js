function last(content, len=1){
    result = ""
    for(let i=content.length-len; i < content.length; i++){
        result += content[i]
    }
    console.log(result);
}

last("zeubi", 4)
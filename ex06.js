function kebabCase(content){
    number = 0
    result = ""
   for(let i=0; i < content.length; i++){
       number = content.charCodeAt(i)
       if(number == 32){
           result += "-"
       }
       else if(number >= 65 && number <= 90 && content[i-1] == undefined){
           result += content[i].toLowerCase()
       }
       else if(number >= 65 && number <= 90 && content[i-1] !== undefined){
        if(content[i-1] == "-"){
            result += content[i].toLowerCase()
        }
        else{
            result += "-" + content[i].toLowerCase()
        }
       }
       else if((i == 0 && number == 45) || (i == content.length-1 && number == 45)){
           result += ""
       }
       
       else{
        result += content[i]
       }

   }
   console.log(result)
}

kebabCase("ChaineDe-Caractère-")

//solução 1
//function verificaPalindromo(string){
//    if(!string) return "string inexistente";
    
//    return string.split("").reverse().join("") === string;
//}

//console.log(verificaPalindromo("ana"));

//solução 2
function verificaPalindromo(string){
    if(!string) return "string inexistente";
    for(let i=0; i<string.lenght/2; i++){
        if(string[i] !== string[string.lenght -1 -i]){
        return false;
        }
    }        

    return true;
}
console.log(verificaPalindromo("gato"));
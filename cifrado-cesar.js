function rot13(str) {
    var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var cesar = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    var mensajeCifrado = "";
    for (var i=0; i<str.length; i++) {
        let letra = str[i];
        let indiceLetra = abecedario.indexOf(letra);
      if(indiceLetra == -1){
      mensajeCifrado += str[i];
      }
      if(indiceLetra != -1){
        mensajeCifrado += cesar[indiceLetra];
      }
    }
      return mensajeCifrado;
    }
    
    console.log(rot13("SERR PBQR PNZC!"));
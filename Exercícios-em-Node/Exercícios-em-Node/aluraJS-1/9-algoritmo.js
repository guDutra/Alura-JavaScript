const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Insira um número`, passo => {
      
    let n = parseInt(passo);

    let soma = 0;
    let total = 0;
    var acabou = false;
    while(acabou == false) {

     
      soma = n + soma
      

      if(soma < 100) {

        total = soma + total;
      } else {
        acabou = true;
      }
       


    }

    console.log(total);
  
    readline.close()
  })

  





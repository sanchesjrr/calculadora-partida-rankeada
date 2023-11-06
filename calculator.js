function calculatorRank(victories, defeats) {
    let result = victories - defeats;
    return result;
  }
  
  const result = calculatorRank(111, 5);
  
  if (result < 10) {
        console.log("Ferro");
    }
    
    else if (result >= 11 && result <= 20) {
        console.log("Bronze");
    }

    else if (result >= 21 && result <= 50) {
        console.log("Prata")
    }

    else if (result >= 50 & result <= 80) {
        console.log("Ouro")
    }

    else if (result >= 81 && result <= 90) {
        console.log("Diamante")
    }

    else if (result <= 91 && result <= 100) {
        console.log("Lendário")
    }

    else if (result >= 101) {
        console.log("Imortal")
    }



  // Atualiza o código a cada vez que o Chrome for aberto
  setInterval(function() {
    // Chama a função calculatorRank() novamente
    const novoResultado = calculatorRank(150, 60);
  
    // Atualiza o console com o novo resultado
    console.log(novoResultado);
  }, 1000);
  
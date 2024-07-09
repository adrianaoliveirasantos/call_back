const fs = require('fs')

fs.reaFile('./arq_1.txt', function(error, conteudoArq1){
    if(error){
        console.error('Deu ruim', error.message);
        return
    }
    
    fs.reaFile("./arq_2.txt", function(error,conteudoArq2){
        if(error){
            console.error("deu ruim", error.message);
            return
        }
    
    })
    fs.reaFile("./arq_3.txt", function(error,conteudoArq3){
        if(error){
            console.error("deu ruim", error.message);
            return
        }
    })
    
})

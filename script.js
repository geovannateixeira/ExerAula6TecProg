function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

var http = require('http');
var url = require('url');
var opc = require('./matematica.js');

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    var n = url.parse(req.url,true).query;
    

    let ope = n.op1;
    var num1 = parseInt(n.n1);
    var num2 = parseInt(n.n2);
    var resul = 0;
    
    switch(ope){
        case '1':
             resul = opc.soma(num1,num2);
             res.end("O resultado e " + resul);
             break;

        case '2':
             resul = opc.sub(num1,num2);
             res.end("O resultado e " + resul);
             break;
             
        case '3':
             resul = opc.mult(num1,num2);
             res.end("O resultado e " + resul);
             break;
        
        case '4':
             resul = opc.div(num1,num2);
             res.end("O resultado e " + resul);
             break;

        case '5':
             resul = opc.resto(num1,num2);
             res.end("O resultado e " + resul);
             break;
             
        default:
           res.write("Digite uma opção válida");
    }

    
}).listen(3000); //porta de conexão
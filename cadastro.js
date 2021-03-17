function checkIdade(){

    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear();
    var diff = 0;

    if (dataHoje <=  anoAtual){
                        
       diff = anoAtual - dataHoje;

       if (diff > 18){
        alert('Usuário menor de idade!');
        }
    } document.write(diff);   
}   
     
function checkStatus(){

    var casado
    var resposta;
    if (resposta === casado {
        alert('É necessário enviar documentação do conjuge!.');
    }
}
function checkSalario(){

    var salario
    
    if (resposta === casado {
        alert('É necessário declarar imposto de renda!.');
    }
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado Sr(a) ' + nome.value + ', os seus dados foram encaminhados para o departamento com sucesso.');
    }

}

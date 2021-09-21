var dataAtual = 15;
var inserirData = 17;
var participantes = ["Rebeca","Deyvid"];
var palestrantes = ["Benjamyn","Ethan"];
var idade = 34;

function e() {
    console.log("--------------------------------------------------------------------")
}


if (inserirData > dataAtual){
    e()
    console.log("Cadastro de evento não permitido,pois a data de cadastro é inválida.")
    e()
} else 
    e()
    console.log("Evento cadastrado com sucesso,prossiga com o cadastro de participantes!")
    e()
    console.log("A sua idade é de " + idade + " anos")
    e()
if (idade < 18){    
    console.log("Idade não permitida para o evento!")
    e()
}else 
    console.log("O evento tem " + participantes.length + " participantes neste momento!")
    e()
if(participantes > 100){
    console.log("O evento atingiu o limite de participantes!")
    e()
}else {
    console.log("Você foi cadastrado na lista de participantes.")
    e()
}
    console.log("Participantes: ")
for (let i = 0;i < participantes.length; i++){
    console.log(participantes[i]);
    
}
    e()
    console.log("Palestrantes: ")
for (let i = 0;i < palestrantes.length; i++){
    console.log(palestrantes[i]);
}
    e()
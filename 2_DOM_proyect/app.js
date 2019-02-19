
var resultado = document.getElementById('player-0-panel').target.value;

document.getElementById('player-0-panel').apply(){

    if(!resultado || resultado <= 0){

        document.getElementById('display-settings').innerHTML = 'El resultado es invalido, por favor reinicia el juego';
    }
}


console.log(resultado);
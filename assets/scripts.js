function verificar() {
    var numero1 = document.getElementById("n1").innerHTML;
    var numero2 = document.getElementById("n2").innerHTML;
    var resultado = document.getElementById("n3").value;

    if (numero1 * numero2 == resultado) {
        alert("Parabéns, você ACERTOU!");   
    } else {
        alert("Você errou, tente de novo!")
    }
    resetar();
}

function resetar() {
    var x1 = Math.floor(Math.random() * (99 - 1 +1));
    var x2 = Math.floor(Math.random() * 10);
    document.getElementById("n3").value = "";
    document.getElementById("n1").innerHTML = x1;
    document.getElementById("n2").innerHTML = x2;
}
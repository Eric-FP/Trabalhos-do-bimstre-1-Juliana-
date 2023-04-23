function calculamedia(){
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 6.0){
        document.getElementById("aprovado").style.display = 'inline';
        document.getElementById("reprovado").style.display = 'none';
        document.getElementById("recup").style.display = 'none';
    } else if(media < 2.0){
        document.getElementById("reprovado").style.display = 'inline';
        document.getElementById("aprovado").style.display = 'none';
        document.getElementById("recup").style.display = 'none';

    } else {
        document.getElementById("recup").style.display = 'inline';
        document.getElementById("aprovado").style.display = 'none';
        document.getElementById("reprovado").style.display = 'none';


    }

    document.getElementById("media").innerHTML = media;
}
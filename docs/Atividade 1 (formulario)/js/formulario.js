function categoria(){
    let categoria = document.querySelector("#categoria");
    let tcategoria = categoria.value;
    if (!tcategoria.localeCompare("Fps")){
        document.getElementById("fps").style.display = 'block';
        document.getElementById("metroidVania").style.display = 'none';
        document.getElementById("multiplayer").style.display = 'none';
    } else if(!tcategoria.localeCompare("MetroidVania")){
        document.getElementById("metroidVania").style.display = 'block';
        document.getElementById("fps").style.display = 'none';
        document.getElementById("multiplayer").style.display = 'none';
    } else if(!tcategoria.localeCompare("Multiplayer")){
        document.getElementById("multiplayer").style.display = 'block';
        document.getElementById("metroidVania").style.display = 'none';
        document.getElementById("fps").style.display = 'none';
    }
}

function mostrajogo1(){
    var jogo1 = document.getElementById("jogofps").value;
    if(!jogo1.localeCompare("valorant")){
        document.getElementById("imagem").src = "https://images.hdqwalls.com/download/valorant-closed-beta-2020-qb-1280x720.jpg"
    }
    else if(!jogo1.localeCompare("cs")){
        document.getElementById("imagem").src = "https://clubedovideogame.com.br/wp-content/uploads/2021/06/CS-Go-1.jpg"
    } else if (!jogo1.localeCompare("cod")){
        document.getElementById("imagem").src = "https://images.hdqwalls.com/download/call-of-duty-warzone-fh-1280x720.jpg"
    }
}   

function mostrajogo2(){
    var jogo2 = document.getElementById("jogomv").value;
    if(!jogo2.localeCompare("sotn")){
        document.getElementById("imagem").src = "https://i.ytimg.com/vi/FhDMUad6RNM/maxresdefault.jpg"
    }
    else if(!jogo2.localeCompare("metroid")){
        document.getElementById("imagem").src = "https://i.ytimg.com/vi/7dU5Y8alauo/maxresdefault.jpg"
    }
    else if(!jogo2.localeCompare("dandara")){
        document.getElementById("imagem").src = "https://i.ytimg.com/vi/GkW1oeoQTL0/maxresdefault.jpg"
    }
    else if(!jogo2.localeCompare("hollowknight")){
        document.getElementById("imagem").src = "https://psxbrasil.com.br/wp-content/uploads/2018/08/hollowknight.jpg"
    }
}

function mostrajogo3(){
    var jogo3 = document.getElementById("jogomp").value;
    if(!jogo3.localeCompare("horizonchase")){
        document.getElementById("imagem").src = "https://t.ctcdn.com.br/A71cOq6u20oyb9poQzbH_tlk0-Q=/0x28:1280x749/1280x720/smart/i326088.jpeg"
    }
    else if(!jogo3.localeCompare("boomerangfu")){
        document.getElementById("imagem").src = "https://1.bp.blogspot.com/-4ITDruGfoT0/XwdMIOE1heI/AAAAAAAAdb4/e5rscAcW69w0GkHUHESgbcluu09bQ1_CACLcBGAsYHQ/s1600/boomerang-fu-capa.jpg"
    }
    else if(!jogo3.localeCompare("pummelparty")){
        document.getElementById("imagem").src = "https://i.ytimg.com/vi/r89FUAePTdo/maxresdefault.jpg"
    }
    else if(!jogo3.localeCompare("unrailed")){
        document.getElementById("imagem").src = "https://images.nintendolife.com/32d8f83ad518f/1280x720.jpg"
    }
}
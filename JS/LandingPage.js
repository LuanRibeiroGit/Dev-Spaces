let quebrada = false

function mudarLampada(tipo){
    if(tipo == 1){
        arquivo = "/Lampada/acesa.png";
    }else if(tipo == 2){
        arquivo = "/Lampada/apagada.png";
    }else if(tipo == 3){
        arquivo = "/Lampada/quebrada.png";
    }
    if(!quebrada){
        document.getElementById("lampada").src = arquivo ;
        if(tipo == 3){
            quebrada = true
        }
    }   
}

function mudarIcons(tipo){
    if(tipo == 1){
        arquivo = "/icons/Home.png"
    }else if(tipo == 2){
        arquivo = "/icons/Discord.png"
    }else if(tipo == 3){
        arquivo = "/icons/Money.png"
    }else if(tipo == 4){
        arquivo = "/icons/Help.png"
    }else if(tipo == 5){
        arquivo = "/icons/Login.png"
    }else if(tipo == 6){
        arquivo = "/icons/Cadastro.png"
    }
    document.getElementById("icon").src = arquivo;
}
console.log("Taille goban JS vient d'être chargé");

    var tailleGoban = $('#gobanC >tbody >tr').length;
    var taille;
var tailleFunction = function (event) {
        
        var a;
        var b;
        
        console.log("click 9");
        console.log(tailleGoban);
        $('#gobanC >tbody').remove();
        $('#goban >tbody').remove();
        for (a = 0; a < taille; a++){
            $("#gobanC").append('<tr></tr>');
        }
        for(b=0; b<taille;b++){
            $("#gobanC tr").append('<td></td>');
        }

        for (a = 0; a < taille-1; a++) {
            $("#goban").append('<tr></tr>');
        }
        for (b = 0; b < taille-1; b++) {
            $("#goban tr").append('<td></td>');
            }  
            
        // DOUBLE BOUCLE APPEND HOSHI
        if(taille==9){
        for(i=2;i<7;i=i+2)
            for(j=2;j<7;j=j+2)
                $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">');     
        }
        else if(taille==13){
            for (i = 3; i < 10; i = i + 3)
                for (j = 3; j < 10; j = j + 3)
                    $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">');
        }
        else{
            for (i = 3; i < 16; i = i + 6)
                for (j = 3; j < 16; j = j + 6)
                    $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">'); 
        }

        tailleGoban = $('#gobanC >tbody >tr').length;
        
    }
S


console.log("Taille goban JS vient d'être chargé");

    var tailleGoban = $('#gobanC >tbody >tr').length;
    var taille;
    var a;
    var b;
    var centrage;
var tailleFunction = function (event) {
        
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
            centrage = {width:'400px', 'margin-left': '-200px'
                        };      
            $("#gobanC").css(centrage);
        for(i=2;i<7;i=i+2)
            for(j=2;j<7;j=j+2)
                $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">');     
        }
        else if(taille==13){
            centrage = {width:'560px', 'margin-left': '-280px'
                        };      
            $("#gobanC").css(centrage);
            for (i = 3; i < 10; i = i + 3)
                for (j = 3; j < 10; j = j + 3)
                    $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">');
        }
        else{
            centrage = {width:'820px', 'margin-left': '-410px'
                        };      
            $("#gobanC").css(centrage);
            for (i = 3; i < 16; i = i + 6)
                for (j = 3; j < 16; j = j + 6)
                    $("#goban tr").eq(i).children().eq(j).append('<img class="hoshi" src="./image/hoshi.png" alt="">'); 
        }

        tailleGoban = $('#gobanC >tbody >tr').length;
        
    }



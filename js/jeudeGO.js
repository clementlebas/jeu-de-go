console.log("Jeu de GO JS vient d'être chargé");
$(document).ready(function () {
    console.log("Le document est pret");

    /*var canvas = document.getElementById("goban"); //identifiant nommé goban
    var crayon = canvas.getContext("2d"); //pour créer et manipuler le contenu affiché, context du dessin en 2d
    */

    var joueur= 'n'; //initialisation tour de role/ pierre blanche commence
    //stockage image pierre
    var pierreBlanche= ('<img src="./image/pierreBlange.png" alt="pierre blanche" class="blanche"/>');
    var pierreNoir = ('<img src="./image/pierreNoir.png" alt="pierre noir" class="noir"/>'); 
    var cptB=0;
    var cptN=0;
    var finPartie=0;
    var el = document.getElementById("gobanC"); //ajoute les écouteurs dévenements au nv table
        
    
    var goFunction = function (e){
        $('#gobanC td').click(function (event) {
            console.log("Une case a été sélection");

        /***TEST DROPPABLE***/            
            /*$("#gobanC td").droppable({
                drop: function (event, ui) {
                    $(this)
                        .addClass("b")

                    // centre la pierre dans le td

                    ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $(this),
                        using: function (pos) {
                            $(this).animate(pos);
                        }
                    })


                }

            });*/

            /******************************************ALGO SUPPRESSION************************************* */
            //EMPECHE LE JOUEUR DE JOUER A CET ENDROIT SI LA PIERRE EST ENCERCLE (TROU)
            
            /*
            var el = event.target;
            var i;
            i = $(el).index();
            var j;
            var couleur = el.className;
            var couleurContraire;
            
            var topTD = $(el).parent('tr').prev().children().eq(i);
            var bottomTD = $(el).parent('tr').next().children().eq(i);
            var prevTD = $(el).prev('td');
            var nextTD = $(el).closest('td').next();
            console.log(topTD, bottomTD, prevTD, nextTD);

            if (couleur == 'b')
                couleurContraire = 'n';
            else
                couleurContraire = 'b';


            j = $(el).parent().index();
            console.log(couleur);


            console.log(couleurContraire);



            if ($('#gobanC td').hasClass('b') && topTD.hasClass('n')
                && bottomTD.hasClass('n')
                && prevTD.hasClass('n')
                && nextTD.hasClass('n')) {
                alert("Capturé !");

                console.log($('#gobanC tr'));
            }*/
            
            /************************************************************************************************* */
            
            if (!($(this).hasClass(''))) {
                return; // case où il y a déjà quelque-chose, rien ne se passe
            }
            else
                $(this).addClass(joueur);
                

            console.log(joueur);
            joueur = (joueur === 'b' ? 'n' : 'b');
            finPartie=0;
            if ($(this).hasClass('b')){
                $(this).append(pierreBlanche); //affichage de la pierre
                $(this).css({
                    'background-color': 'transparent',// supprime hover
                             cursor : 'grab' }); 
                cptB++;
                $(".blanche").draggable({
                    revert: true //retour case si pas dans le drop
                });
                /*var position = $(".blanche").position();
                console.log(position);*/
                $('.compteurBlanche').text("Joueur pierre blanche: " + cptB);
                chronoN(); 
                clearInterval(timerB);
            }
                else{
                    $(this).append(pierreNoir); //affichage de la boule
                $(this).css({
                    'background-color': 'transparent',// supprime hover
                    cursor: 'grab'
                });
                    cptN++;
                    $(".noir").draggable({
                        revert: true
                    });
                    $('.compteurNoir').text("Joueur pierre noire: " + cptN);
                    chronoB();
                    clearInterval(timerN); 
                }   
        });
        
    }
    goFunction();
    
        
    /********************************************DROP****************************************************************** */
        
    $(".boiteNoir").droppable({
        drop: function (event, ui) {
            console.log("luiiii", ui.draggable);
            
            //supprime la classe du td si ui.draggable dans le drop
            $(this).html(ui.draggable.parent().removeClass().html());
            //supprime cursor
            $(this).html(ui.draggable.parent().removeAttr("style").html());
            // supprime l'image
            $(this).html(ui.draggable.remove().html());
            
        }
        
    });

    // BOUTON PASSE
    $("#passe").click(function (event) {
        event.preventDefault(); // poursuivre le chrono
        joueur = (joueur === 'b' ? 'n' : 'b');
        finPartie++;
        console.log(finPartie);

        if (joueur == 'b') {
            chronoB();
            clearInterval(timerN);
        }
        else {
            chronoN();
            clearInterval(timerB);
        }

        if (finPartie == 2) {
            var scoreN = $(".n").size();
            var scoreB = $(".b").size();
            finPartie = 0;

            console.log(scoreB, scoreN);

            alert("Fin de la partie !\nNombre de pierres blanches: " + scoreB + '\n' +
                "Nombre de pierres noires: " + '' + scoreN + "\nLe score est la somme du nombre de pierres et des points de territoire.");
        }

    });

    //Fonction RESET
    var resetFunction = function (event) {

        $("img.noir").remove();
        $("img.blanche").remove();
        $("td").removeClass("b n");
        cptB = 0;
        cptN = 0;
        cptNoir = -1;
        joueur = 'n';
        finPartie=0;
        $('.compteurNoir').text("Joueur pierre noire: " + cptN);
        $('.compteurBlanche').text("Joueur pierre blanche: " + cptB);
        clearInterval(timerB);
        clearInterval(timerN);
        //empecher le chrono de se relancer et affichage chrono a zero
        $("span").text(0);
        cptBlanche = 0;
        cptNoir = 0;
        // remet le hover (a revoir)
        $("#gobanC td").removeAttr("style")
    }

    $(".reset").click(function (event) {
        resetFunction();
    });
    
    //Gestion taille Goban
    $(".neuf").click(function (event) {
        taille = 9;
        if (tailleGoban == 9) {
            return false;
        }
        else {

            tailleFunction();
            resetFunction();
        }
    });

    $(".treize").click(function (event) {
        taille = 13;
        console.log(taille);
        if (tailleGoban == 13) {
            return false;
        }
        else {


            tailleFunction();
            resetFunction();
        }

    });

    $(".dixneuf").click(function (event) {
        taille = 19;
        if (tailleGoban == 19) {
            return false;
        }
        else {

            tailleFunction();
            resetFunction();
        }

    });

   
    
    //ADD LISTENER NOUVEAUX TD
    el.addEventListener("click", goFunction);
    
    
console.log("La mise en place est finie. En attente d'événements...");
});
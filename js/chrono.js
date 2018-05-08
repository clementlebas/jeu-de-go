var cptBlanche = 0;
var minutesBlanche = 0;
    var chronoB = function (e) { 
        timerB = setInterval(function () {
            if (cptBlanche >= 0) // si on a pas encore atteint la fin
            {
                ++cptBlanche; // incrémente le compteur
                console.log(cptBlanche);
                var CronoB = document.getElementById("CronoB"); // récupère l'id
                console.log(CronoB);
                var old_contenuB = CronoB.firstChild; // stock l'ancien contenu
                console.log(old_contenuB);
                CronoB.removeChild(old_contenuB); // supprime le contenu
                var texte = document.createTextNode(cptBlanche); // crée le texte
                console.log(texte);
                CronoB.appendChild(texte); // l'affiche
                // CONVERTIT EN MINUTE, REVOIR SELECTEUR!
                if (cptBlanche > 59) {
                    $("c").remove();
                    minutesBlanche = minutesBlanche + 1;
                    //remet seconde a 0
                    console.log($('p+c'));
                    $('.chrono+p+t').html('<c></c>');
                    $("c").append(minutesBlanche, ":");
                    cptBlanche = 0;
                }
            }
            else // sinon brise la boucle
            {
                clearInterval(timerB);
            }
        }, 1000);
    }

    var cptNoir = 0;
    var minutesNoir = 0;
    var chronoN = function (e) {
        timerN = setInterval(function () {
            if (cptNoir >= 0) 
            {
                ++cptNoir; // incrémente le compteur
                console.log(cptNoir);
                var CronoN = document.getElementById("CronoN"); // récupère l'id
                console.log(CronoN);
                var old_contenuN = CronoN.firstChild; // stock l'ancien contenu
                console.log(old_contenuN);
                CronoN.removeChild(old_contenuN); // supprime le contenu
                var texte = document.createTextNode(cptNoir); // crée le texte
                
                console.log(texte);
                CronoN.appendChild(texte); // l'affiche
                    // CONVERTIT EN MINUTE, REVOIR SELECTEUR!
                    if(cptNoir>59){
                        $("z").remove();
                        minutesNoir=minutesNoir+1;
                        //remet seconde a 0
                        console.log($('p+c'));
                        $('.chrono+p+t+span+p+t').html('<z></z>');
                        $("z").append(minutesNoir, ":");
                        cptNoir=0;
                    }
            }
            else // sinon brise la boucle
            {
                clearInterval(timerN);
            }
        }, 1000);
    }
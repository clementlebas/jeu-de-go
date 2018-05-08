console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	$('#onglets-menu li').mousedown(function () //mousedown" est appelé quand le bouton de la souris s'enfonce
		{
		console.log("Le bouton de la souris a été enfoncé.");
		$('.menu-actif').removeClass('menu-actif');//enlever la classe "menu-actif" de l'onglet qui l'a actuellement
		$(this).addClass('menu-actif'); //ajouter la classe "menu-actif" à l'onglet sur lequel on vient de cliquer
		//"this" : l'objet associé à cette fonction

		//determiner quel onglet est selectionné, liste: $('#onglets-menu>li')
		var num = $('#onglets-menu>li').index(this); // .index() permet d'obtenir le numéro d'un élément dans une liste jQuery
		console.log("L'utilisateur a cliqué sur l'onglet:", num);

		$('.contenu-actif').removeClass('contenu-actif');
		$('#onglets-contenu>div').eq(num).addClass('contenu-actif');//.eq(num)s'applique à une liste jQuery et la réduit à un seul élément
	});
	console.log("La mise en place est finie. En attente d'événements...");
});
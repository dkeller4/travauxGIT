/**
 * Created by dkeller on 2016-11-14.
 */

$.each(forfaits, function(){
        $('<div class="forfait" ></div>')
            .appendTo('body')
            .append('<ul></ul>')
            .children('ul')
            .append('<li></li>')
            .append('<li></li>')
            .append('<li></li>')
            .append('<li></li>')
    });

$('div.forfait').each(function(index){
    var texte_nom_du_forfait= "Le Nom du forfait : " +forfaits[index].nom;
    var texte_prix_moyen= "Le prix moyen : " +forfaits[index].prix_moy_saison + "$";
    var texte_date_debut_saison= "La date du début de la saison : " +forfaits[index].debut_saison;
    var texte_description= "La description : " +forfaits[index].description;
    $(this)
        .children('ul')
        .children('li')
        .first()
        .text(texte_nom_du_forfait)
        .next()
        .text(texte_prix_moyen)
        .next()
        .text(texte_date_debut_saison)
        .next()
        .text(texte_description);
});




/*
for (var i=0; i<forfaits.length ; i++){
    document.body.innerHTML+= "<div id='forfait" + i+1 + "'></div>";
    var selected_div = document.body.querySelector("div#forfait" + i+1 + "");
    selected_div.innerHTML += "<ul></ul>";
    var selected_ul = selected_div.getElementsByTagName("ul")[0];
    selected_ul.innerHTML += "<li> Le Nom du forfait : " +forfaits[i].nom + "</li>";
    selected_ul.innerHTML += "<li> Le prix moyen : " +forfaits[i].prix_moy_saison + "</li>";
    selected_ul.innerHTML += "<li> La date du début de la saison : " +forfaits[i].debut_saison + "</li>";
    selected_ul.innerHTML += "<li> La description : " +forfaits[i].description + "</li>";
}
*/

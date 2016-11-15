/**
 * Created by dkeller on 2016-11-15.
 */
"use strict";
const MIN_NB_CAR=3;

$(function () {
    console.log("DOM construit");
    $('#form_resa').on('submit',valider_formulaire);
});

function valider_formulaire(event) {
    console.log('tentative de soumission');
    var formulaire_valide = true;

    $(':text').each(function(){
        if ($(this).val().trim().length < MIN_NB_CAR) {
            formulaire_valide = false;
            if( ! $(this).hasClass("error") ){
                $(this).addClass('error');
                $(this).after('<p class="error_msg">Le champ contient moins de 3 caractères.</p>');
            }
        } else {
            $(this).removeClass('error');
            $(this).parent().find('.error_msg').remove();
        }
    });

    if ($('select[name="ville"]').children('option:selected').val() == '-1') {
        formulaire_valide = false;
        $('select[name="ville"]').addClass('error');
    } else {
        $('select[name="ville"]').removeClass('error');
    }


    if (! formulaire_valide) {
        event.preventDefault();
    }
}


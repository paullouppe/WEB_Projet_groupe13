if (localStorage.getItem('user') == undefined || localStorage.getItem('user') == '') {
    window.location.href = './connexion.html';
}

//----------------------------------------------VERSUS------------------------------------------------------------
var settings = {
    "url": "http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/election/" + localStorage.getItem('versus'),
    "method": "GET",
    "timeout": 0,
};
let i = 0;
$.ajax(settings).done(function(response) {
    play(response);
});

function play(response) {
    updateAffichage(response.candidats[Math.floor(Math.random() * response.candidats.length)], response.candidats[Math.floor(Math.random() * response.candidats.length)], response);
}

function updateAffichage(candidat1, candidat2, response) {
    $("#button_choix1").click(function() {
        vote(candidat1, response);
    });
    $("#button_choix2").click(function() {
        vote(candidat2, response);
    });
    $("#img_choix1").attr("src", candidat1.url);
    $("#img_choix2").attr("src", candidat2.url);
    i++;
}

function vote(candidat, response) {
    /*let newscore = candidat.score + 1;
    var settings = {
        "url": "http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/candidat/" + candidat.id + "?score=" + newscore,
        "method": "PUT",
        "timeout": 0,
    };

    $.ajax(settings).done(function(res) {
    });*/
    if (i > (response.candidats.length * 2)) {
        window.location.href = "./election_utilisateur.html";
    } else {
        updateAffichage(response.candidats[Math.floor(Math.random() * response.candidats.length)], response.candidats[Math.floor(Math.random() * response.candidats.length)], response);
    }

}


//----------------------------------------------POPUP------------------------------------------------------------
$("#btn_deconnexion").click((e) => {
    localStorage.removeItem('user');
    window.location.href = "./connexion.html"
})

function openForm() { //ouvrir le form de déconnexion
    document.getElementById("myForm").style.display = "block";
}

function closeForm() { //et le fermer 
    document.getElementById("myForm").style.display = "none";
}

//simplement la version pour le popup de déconnexion dans la vue vs
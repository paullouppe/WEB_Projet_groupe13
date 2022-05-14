if (localStorage.getItem('user') == undefined || localStorage.getItem('user') == '') {
    window.location.href = './connexion.html';
}

function showElectionsInvite() {
    var settings = {
        "url": "http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/election",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function(response) {
        response.forEach(election => {
            date1 = new Date(election.datefin);
            if (date1 < new Date()) {
                createCard(election, true);
            } else {
                createCard(election, false);
            }
        });
        $(".participer").each(function() {
            $(this).click(function() {
                localStorage.removeItem('versus');
                localStorage.setItem('versus', $(this).attr("id"));
                window.location.href = "./versus.html";
            });
        });
    });
}

function createCard(election, passe) {
    $(`#elections_${((passe) ? 'passees' : 'en_cours')}`).append(
            `<div class="electionCard">
            <p>${election.titre}</p>
            ${((passe) ? '<p>"gif gagnant"</p>' : `<button id=${election.id} class="participer">Participer</button>`)}
        </div>`
    );
}
showElectionsInvite();

//popup
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
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
    });
}

function createCard(election, passe) {
    console.log(election);
    $(`#elections_${((passe) ? 'passees' : 'en_cours')}`).append(
        `<div class="electionCard">
            <p>${election.titre}</p>
            ${((passe) ? '<p>"gif gagnant"</p>' : '<button class="participer">Participer</button>')}
        </div>`
    );
}
showElectionsInvite();

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//popup
$("#btn_deconnexion").click((e) => {
    window.location.href = "./connexion.html"
})

function openForm() { //ouvrir le form de déconnexion
    document.getElementById("myForm").style.display = "block";
}

function closeForm() { //et le fermer 
    document.getElementById("myForm").style.display = "none";
}
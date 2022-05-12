function showElectionsAdmin() {
    var settings = {
        "url": "http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/election",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function(response) {
        response.forEach(election => {
            createCard(election);
        });
    });
}

function createCard(election) {
    $(`#elections_admin`).append(
        `<div class="electionCard">
            <p>${election.partie}</p>
            <button class="modifier">Modifier</button>
            <button class="fermer">Fermer</button>
        </div>`
    );
}
$("#creation_bouton").click((e) => {
    window.location.href = "./admin_creation.html"
});
showElectionsAdmin();
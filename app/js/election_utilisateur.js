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
            <button class="results">Résultats !</button>
        </div>`
    );
}
showElectionsInvite();




function openForm() { //ouvrir le form de déconnexion
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() { //et le fermer 
    document.getElementById("myForm").style.display = "none";
  }
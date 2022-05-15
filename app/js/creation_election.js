if (localStorage.getItem('user') == undefined || localStorage.getItem('user') == '') {
    window.location.href = './connexion.html';
}

$('#add_gif').click((e) => {
    $('#candidat_input').append(`<input class="candidats" required="required" type="text"/>`);
});

$("#submit_bouton").click((e) => {
    let candidats = "";
    let i = 0;
    $(".candidats").each(function() {
        candidats += `&candidat[${i}][url]="${encodeURIComponent($(this).val())}"&candidat[${i}][score]=0`;
        i++;
    });
    console.log(candidats);
    var settings = {
        "url": `http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/election?titre=${$("#titre").val()}&datedebut=${$("#datedebut").val()}&datefin=${$("#datefin").val()}&${candidats}`,
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings).done(function(response) {
        window.location.href = "./admin.html"
    });
});
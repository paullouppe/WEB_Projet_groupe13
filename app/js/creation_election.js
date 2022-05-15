if (localStorage.getItem('user') == undefined || localStorage.getItem('user') == '') {
    window.location.href = './connexion.html';
}

$('#add_gif').click((e) => {
    $('#candidat_input').append(`<input class="candidats" required="required" type="text"/>`);
});

$("#submit_bouton").click((e) => {
    var settings1 = {
        "url": `http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/election?titre=${$("#titre").val()}&datedebut=${$("#datedebut").val()}&datefin=${$("#datefin").val()}`,
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings1).done(function(response) {
        let i = 0;
        $(".candidats").each(function() {
            var settings2 = {
                "url": `http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/candidat?url=${encodeURIComponent($(this).val())}&id=${response.id}`,
                "method": "POST",
                "timeout": 0,
            };
            console.log(settings2.url);

            $.ajax(settings2).done(function(response) {
                i++;
                if (i == $(".candidats").length) {
                    window.location.href = "./admin.html";
                }
            });
        });
    });
});
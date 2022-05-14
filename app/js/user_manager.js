$('#inscription_button').click((e) => {
    if ($("#password1").val() != $("#password2").val()) {
        $("#cred").append('<span style="color: red; font-size: 0.5em">Mot de passe doivent être égaux</span>');
        return;
    }
    var settings = {
        "url": `http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/users?username=${$("#identifier2").val()}&password=${$("#password1").val().hashCode()}&role=${(($("#admin").is(':checked')) ? 'admin' : 'user')}`,
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings).done(function(response) {
        window.location.href = "./connexion.html";
    });
});

$('#connexion_button').click((e) => {
    var settings = {
        "url": "http://bestgifapi-env.eba-mqsauu4a.us-east-1.elasticbeanstalk.com/api/users",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function(response) {
        let u = $('#identifier2').val();
        let p = $('#password1').val().hashCode();
        response.forEach((user) => {
            if (u == user.username && p == user.password) {
                document.cookie = `id=${user.id}`;
                window.location.href = (user.role == 'admin') ? './admin.html' : './election_utilisateur.html';
                return;
            }
        });
        $("#cred").append('<span style="color: red; font-size: 0.5em">mot de passe ou identifiant incorrectes</span>');
    });
});

$('#newacc_button').click((e) => {
    window.location.href = "./creation.html";
});

String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
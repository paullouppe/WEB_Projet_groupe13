# WEB_Projet_groupe13

### Modèle de la base de donnée
USERS(_id_, username, password, token, role)<br>
ELECTIONS(_id_, titre, datedebut, datefin, #participe)<br>
PARTICIPE(_#idElection, #idCandidat_)<br>
CANDIDAT(_id_, url)<br>
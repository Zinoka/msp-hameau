<script lang="ts">
    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, 0);
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/doctors.css">
    </head>
    <body>
        <div class="navbar">
            <div class="title">Maison de Santé Pluriprofessionnelle</div>
            <div class="right-buttons">
                <button class="navbar-button">Accueil</button>
                <button class="navbar-button">Les Praticiens</button>
                <button class="navbar-button">Contact</button>
                <button class="navbar-button">Horaires</button>
                <button class="navbar-button">Rendez-vous</button>
            </div>
        </div>
        <div class="doctors-container">
            <h1 style="color: #325592;">Infirmière Asalée</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Nathalie Pujol</div>
                <div class="doctor-address" style="color: white;">L'infirmière Asalée reçoit du lundi au vendredi pour des prises en charge en éducation thérapeutique concernant notammennt le diabéte, l'arrêt du tabac, le dépistage des maladies cognitives.</div>
                <div class="doctor-address" style="color: white; margin-top: 10%;">Il faut en parler au préalable avec votre médecin traitant qui vous adressera à l'infirmière Asalée si il le juge nécessaire.</div>
            </div>
        </div>
        <div style="position: absolute; bottom: 0; width: 100%;">
            <div class="footer-buttons">
                <button class="footer-button">Accueil</button>
                <button class="footer-button">Les Praticiens</button>
                <button class="footer-button">Contact</button>
                <button class="footer-button">Mentions Légales</button>
                <button class="footer-button">Horaires</button>
                <button class="footer-button">Rendez-vous</button>
            </div>
            <div class="footer-text">
                <p style="margin-top: 1vh; margin-bottom: 1.5vh;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
                <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
            </div>
        </div>
    </body>
</html>
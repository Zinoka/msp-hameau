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
            <h1 style="color: #325592;">Orthophonistes</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Rémi Martel</div>
                <img style="border-radius: 50%; width: 50%; margin-left: 50%; transform: translateX(-50%); margin-bottom: 10%" src="images/RemiMartel.jpg" alt="Rémi Martel"/>

                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Mercredi 8h30-18h30</li>
                        <li>jeudi 8h30-18h30</li>
                        <li>vendredi 8h30-18h30</li>
                    </ul>
                </div>
                <div class="doctor-phone" style="color: white;">Téléphone : 09 86 57 18 00</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://perfactive.fr/list/remi-martel")}>Prendre rendez-vous</button>
            </div>
        </div>
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
    </body>
</html>
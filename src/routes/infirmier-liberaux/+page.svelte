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
            <h1 style="color: #325592;">Infirmiers Libéraux</h1>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Cabinet infirmier</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Gaelle Langlet</li>
                        <li>Michelle Hodée Sylvie Stagnitto</li>
                        <li>Sophie Manguembe</li>
                    </ul>
                </div>
                <div class="doctor-email" style="color: white;">Horaires : Visites à domicile sur rendez-vous de 7h00 à 13h00 puis de 16h00 à 19h00 tous les jours</div>
                <div class="doctor-email" style="color: white;">Dimanche et jours fériés inclus</div>
                <div class="doctor-email" style="color: white;">Permanence de 11h30 à 12h00 du lundi au vendredi</div>
                <div class="doctor-email" style="color: white;">Prise de contact et rendez-vous uniquement par téléphone</div>
                <div class="doctor-phone" style="color: white;">Téléphone : 05 59 02 59 60</div>
                <div class="doctor-address" style="color: white;">Adresse : 10 rue d'Eauze, 64000 Pau</div>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white; font-size: 24px;">Cabinet infirmier</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lionel Barral</li>
                        <li>Julie Guiard</li>
                    </ul>
                </div>
                <div class="doctor-email" style="color: white;">Horaires : Tous les jours de 6h30 à 18h30</div>
                <div class="doctor-email" style="color: white;">Soins à domicile sur rendez-vous uniquement</div>
                <div class="doctor-email" style="color: white;">Contact uniquement par téléphone</div>
                <div class="doctor-phone" style="color: white;">Téléphone : 06 65 00 17 81</div>
                <div class="doctor-address" style="color: white;">Adresse : 119 avenue du loup, 64000 Pau</div>
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
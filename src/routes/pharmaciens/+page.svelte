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
            <h1 style="color: #325592;">Pharmaciens</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Frédéric Pinot et Laurent Couret</div>
                <div class="doctor-title" style="color: white;">Pharmacie de la Paix Aprium</div>
                <img style="border-radius: 50%; width: 50%; margin-left: 30%; transform: translateX(-30%); margin-bottom: 10%" src="images/FredericPinot.png" alt="Frédéric Pinot"/>
                <img style="border-radius: 50%; width: 50%; margin-left: 70%; transform: translateX(-70%); margin-bottom: 10%" src="images/LaurentCouret.png" alt="Laurent Couret"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 8h30 à 20h00</li>
                        <li>Samedi de 8h30 à 19h00</li>
                    </ul>
                </div>
                <div class="doctor-phone" style="color: white;">Téléphone : 05 59 02 66 47</div>
                <div class="doctor-address" style="color: white;">Adresse : 155 Boulevard de la paix, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://pharmacie-de-la-paix.aprium-pharmacie.fr")}>Site web</button>
            </div>


            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Sophie Maréchal</div>
                <div class="doctor-title" style="color: white;">Pharmacie du centre Berlioz</div>
                <img style="border-radius: 50%; width: 50%; margin-left: 50%; transform: translateX(-50%); margin-bottom: 10%" src="images/SophieMarechal.jpg" alt="Sophie Maréchal"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 8h30 à 12h30 et de 14h00 à 19h30</li>
                        <li>Samedi de 8h30 à 12h30</li>
                    </ul>
                </div>
                <div class="doctor-phone" style="color: white;">Téléphone : 05 59 02 68 94</div>
                <div class="doctor-address" style="color: white;">Adresse : 38 rue Berlioz, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://pharmacieberlioz-pau.pharmavie.fr")}>Site web</button>
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
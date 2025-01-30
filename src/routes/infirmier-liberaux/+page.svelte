<script lang="ts">
    import { goto } from '$app/navigation';

    let isburgerMenuOpen = false;
    
    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }
</script>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Infirmiers Libéraux</title>
        <link rel="preconnect" href="css/index.css">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/doctors.css">
    </head>
    <body>
        <div class="doctors-container">
            <h1 style="color: #325592;">Infirmiers Libéraux</h1>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Cabinet infirmier du Hameau</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Gaelle Langlet</li>
                        <li>Michele Rota</li>
                        <li>Sylvie Stagnitto</li>
                        <li>Sophie Manguembe</li>
                    </ul>
                </div>
                <div class="images-container">
                    <img class="doctor-image" style="transform: translate(-80%, 5%);" src="images/GaelleLanglet.jpg" alt="Gaelle Langlet"/>
                    <img class="doctor-image" style="transform: translate(-10%, -70%);" src="images/MicheleHodee.jpg" alt="Michele Rota"/>
                    <img class="doctor-image" style="transform: translate(-80%, -150%);" src="images/SylvieStagnitto.jpg" alt="Sylvie Stagnitto"/>
                    <img class="doctor-image" style="transform: translate(-10%, -190%);" src="images/sophieManguembe.jpg" alt="Sophie Manguembe"/>
                </div>
                <div class="doctor-email" style="color: white;">Horaires : Visites à domicile sur rendez-vous de 7h00 à 13h00 puis de 16h00 à 19h00 tous les jours.</div>
                <div class="doctor-email" style="color: white;">Dimanche et jours fériés inclus.</div>
                <div class="doctor-email" style="color: white;">Permanence de 11h30 à 12h00 du lundi au vendredi.</div>
                <div class="doctor-email" style="color: white;">Prise de contact et rendez-vous uniquement par téléphone.</div>
                <a class="doctor-phone" href="tel:0559025960" style="color: white;">Téléphone : 05 59 02 59 60.</a>
                <div class="doctor-address" style="color: white;">Adresse : 10 rue d'Eauze, 64000 Pau.</div>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white; font-size: 24px;">Cabinet infirmier</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lionel Barral</li>
                        <li>Julie Guiard</li>
                    </ul>
                </div>
                <img class="doctor-image" style="transform: translateX(-100px)" src="images/JulieGuiard.jpeg" alt="Julie Guiard"/>
                <img class="doctor-image" style="transform: translate(-40px, -80px);" src="images/LionelBarral.jpg" alt="Lionel Barral"/>
                <div class="doctor-email" style="color: white;">Horaires : Tous les jours de 6h30 à 18h30.</div>
                <div class="doctor-email" style="color: white;">Soins à domicile sur rendez-vous uniquement.</div>
                <div class="doctor-email" style="color: white;">Contact uniquement par téléphone.</div>
                <a class="doctor-phone" href="tel:0665001781" style="color: white;">Téléphone : 06 65 00 17 81.</a>
                <div class="doctor-address" style="color: white;">Adresse : 119 avenue du loup, 64000 Pau.</div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>
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

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Infirmière Asalée</title>
        <link rel="preconnect" href="css/index.css">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/doctors.css">
    </head>
    <body>
        <div class="doctors-container">
            <h1 style="color: #325592;">Infirmière Asalée</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Nathalie Pujol</div>
                <img class="doctor-image" src="images/NathaliePujol.jpg" alt="Nathalie Pujol"/>
                <div class="doctor-address" style="color: white;">L'infirmière Asalée reçoit du lundi au vendredi pour des prises en charge en éducation thérapeutique concernant notammennt le diabéte, l'arrêt du tabac, les risques cardiovasculaire (hypertension artériel et cholestérol), mais aussi le dépistage des troubles de la mémoire.</div>
                <div class="doctor-address" style="color: white; margin-top: 10%;">Il faut en parler au préalable avec votre médecin traitant qui vous adressera à l'infirmière Asalée si il le juge nécessaire. L'infirmière vous contacterea pour vous proposer un nouveau rendez-vous.</div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div style="position: absolute; bottom: 0; width: 100%;">
            <div class="footer-text">
                <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
                <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
            </div>
        </div>
    </body>
</html>
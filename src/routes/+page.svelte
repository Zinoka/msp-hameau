<script lang="ts">
    import { goto } from '$app/navigation';

    function goTo(url: string) {
        setTimeout(() => {
            goto(url);
        }, 400);
    }

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

    </head>
    <body>
        <div class="navbar">
            <div class="title">Maison de Santé Pluriprofessionnelle</div>
            <div class="right-buttons">
                <button class="navbar-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="navbar-button">Les Praticiens</button>
                <button class="navbar-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="navbar-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="navbar-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        </div>
        <div class="slogan-container">
            <img class="logo" src="images/logo.png" alt="logo de la maison de santé pluriprofessionnelle du Hameau">
            <div class="slogan">La Maison de Santé, une autre façon de travailler ensemble !</div>
        </div>
        <div class="welcome-panel">
            <h1>Bienvenue !</h1>
            <div class="welcome-text">
                <p>Notre maison de santé du Hameau est <strong>multisite</strong>, c'est à dire qu'elle est divisée en <strong>7 lieux</strong> sur le quartier du Hameau (Ousse des Bois et Berlioz)</p>
                <p style="margin-top: 30px;">Nous sommes une équipe de <strong>19</strong> professionnels</p>
                <ul style="margin-top: 30px; margin-left: 20px;">
                    <li>Médecins généralistes</li>
                    <li>Pharmaciens</li>
                    <li>Orthophonistes</li>
                    <li>Kinésithérapeutes</li>
                    <li>Infirmiers libéraux</li>
                    <li>Infirmiers Asalée</li>
            </div>
            <div class="welcome-image">
                <img src="images/doctors.png" alt="docteurs msp hameau">
            </div>
        </div>
        <div class="line"></div>
        <div class="practitioners-panel">
            <h1>Les Praticiens</h1>
            <div class="practitioners-buttons-panel">
                <button class="practitioner-button" on:click={() => goTo("/medecins-generalistes")}>
                    <span style="position: relative;">Médecins Généralistes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/pharmaciens")}>
                    <span style="position: relative;">Pharmaciens</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/orthophonistes")}>
                    <span style="position: relative;">Orthophonistes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/kinesitherapeutes")}>
                    <span style="position: relative;">Kinésithérapeutes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/infirmiere-asalee")}>
                    <span style="position: relative;">Infirmière Asalée</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/infirmier-liberaux")}>
                    <span style="position: relative;">Infirmiers Libéraux</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
            </div>
        </div>
        <div class="news-panel">
            <h1>Les Nouvelles Actualités</h1>
            <div class="news-cards-panel" style="margin-bottom: 20px;">
                <div class="news-card">
                    <img src="images/logo.png" alt="news1">
                    <div class="news-text">
                        <h2>Titre de la publication</h2>
                        <span>Publié le 26 octobre 2024</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis vitae leo tempus pharetra. Aenean commodo ut orci a varius. Curabitur quis maximus libero. Praesent quis nibh et mi faucibus dapibus ultricies ut leo. Morbi et facilisis leo. Sed laoreet odio eu dolor faucibus laoreet. Praesent eget diam nulla. Aliquam eu sem arcu. Vivamus ultricies nisl vel dignissim vulputate. Ut eu dolor eu libero semper laoreet. Mauris facilisis ante lectus, nec tincidunt leo pulvinar et.</p>
                    </div>
                </div>
                <div class="news-card">
                    <img src="images/logo.png" alt="news1">
                    <div class="news-text">
                        <h2>Titre de la publication</h2>
                        <span>Publié le 26 octobre 2024</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis vitae leo tempus pharetra. Aenean commodo ut orci a varius. Curabitur quis maximus libero. Praesent quis nibh et mi faucibus dapibus ultricies ut leo. Morbi et facilisis leo. Sed laoreet odio eu dolor faucibus laoreet. Praesent eget diam nulla. Aliquam eu sem arcu. Vivamus ultricies nisl vel dignissim vulputate. Ut eu dolor eu libero semper laoreet. Mauris facilisis ante lectus, nec tincidunt leo pulvinar et.</p>
                    </div>
                </div>
                <div class="news-card">
                    <img src="images/logo.png" alt="news1">
                    <div class="news-text">
                        <h2>Titre de la publication</h2>
                        <span>Publié le 26 octobre 2024</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis vitae leo tempus pharetra. Aenean commodo ut orci a varius. Curabitur quis maximus libero. Praesent quis nibh et mi faucibus dapibus ultricies ut leo. Morbi et facilisis leo. Sed laoreet odio eu dolor faucibus laoreet. Praesent eget diam nulla. Aliquam eu sem arcu. Vivamus ultricies nisl vel dignissim vulputate. Ut eu dolor eu libero semper laoreet. Mauris facilisis ante lectus, nec tincidunt leo pulvinar et.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-buttons">
            <button class="footer-button" on:click={() => goTo("/")}>Accueil</button>
            <button class="footer-button">Les Praticiens</button>
            <button class="footer-button" on:click={() => goTo("/contact")}>Contact</button>
            <button class="footer-button" on:click={() => goTo("/mentions-legales")}>Mentions Légales</button>
            <button class="footer-button" on:click={() => goTo("/horaires")}>Horaires</button>
            <button class="footer-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 1.5vh;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>
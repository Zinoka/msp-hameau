<script lang="ts">
    import { goto } from '$app/navigation';
    
    let isburgerMenuOpen = false;
    let init = true;

    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, 0);
    }

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function burgerToggle() {
        init = false;
        isburgerMenuOpen = !isburgerMenuOpen;
    }

    async function scrollToDiv() {
        await goto("/");
        const element = document.getElementById("practitioners");
        element?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Médecins Généralistes</title>
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
                <button class="navbar-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="navbar-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="navbar-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="navbar-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="navbar-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
            {#if isburgerMenuOpen}
            <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                <div class="burger-menu-first-line-to-open"></div>
                <div class="burger-menu-second-line-to-open"></div>
                <div class="burger-menu-third-line-to-open"></div>
            </button>
        {:else if !isburgerMenuOpen && init}
            <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                <div class="burger-menu-first-line"></div>
                <div class="burger-menu-second-line"></div>
                <div class="burger-menu-third-line"></div>
            </button>
        {:else if !isburgerMenuOpen && !init}
            <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                <div class="burger-menu-first-line-to-close"></div>
                <div class="burger-menu-second-line-to-close"></div>
                <div class="burger-menu-third-line-to-close"></div>
            </button>
        {/if}
        </div>
        {#if isburgerMenuOpen}
            <div class="burger-menu-panel">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="burger-menu-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        {:else if !isburgerMenuOpen && !init}
            <div class="burger-menu-panel-closing">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="burger-menu-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        {/if}
        <div class="doctors-container">
            <h1 style="color: #325592;">Médecins Généralistes</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Fanny Le Guen</div>
                <img class="doctor-image" src="images/FannyLeGuen.png" alt="Dr Fanny Le Guen"/>
                <span style="color: white;">Les consultations sont sur rendez-vous :</span>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lundi 9h00-17h00</li>
                        <li>Mardi et vendredi 9h00-19h00</li>
                        <li>Mercredi et Jeudi en alternance (le matin 9h00-12h00, visites l'après-midi)</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559840002" style="color: white;">Téléphone : 05 59 84 00 02</a>
                <div class="doctor-address" style="color: white;">Adresse : 153 Boulevard de la paix, 64000 Pau</div>
                <div class="doctor-note" style="color: white;">Visites à domicile le mercredi après-midi ou le jeudi après-midi</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=b0a236b1-924f-43bd-b566-203202a7210a")}>Prendre rendez-vous</button>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Julie Canton-Arino</div>
                <img class="doctor-image" src="images/JulieCanton.jpeg" alt="Dr Julie Canton-Arino"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lundi 8h30-12h00, 14h00-19h15</li>
                        <li>Mardi 8h30-12h00, 14h00-18h30</li>
                        <li>Mercredi 8h30-11h15</li>
                        <li>Jeudi 8h30-12h00 visites à domicile</li>
                        <li>Vendredi 8h30-12h00, 14h00-18h15</li>
                        <li>Samedi matin (uniquement pour les urgences en alternance avec les autres médecins de la maison de santé)</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559026397" style="color: white;">Téléphone : 05 59 02 63 97</a>
                <div class="doctor-address" style="color: white;">Adresse : 38 rue Berlioz, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=459ad940-8f88-4b95-8ace-396a9bb5d186")}>Prendre rendez-vous</button>
            </div>


            
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Pierre Casedevant</div>
                <img class="doctor-image" src="images/PierreCasedevant.jpg" alt="Dr Pierre Casedevant"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lundi 8h30-12h15, 14h30-19h00</li>
                        <li>Mardi 8h30-12h15, visites à domicile l'après-midi</li>
                        <li>Mercredi avec un médecin remplaçant 9h00-12h00, 14h00-19h00</li>
                        <li>Jeudi 9h00-12h15, 14h30-19h00</li>
                        <li>Vendredi 8h30-12h, 14h30-19h00</li>
                        <li>Samedi matin (uniquement pour les urgences en alternance avec les autres médecins de la maison de santé)</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559841227" style="color: white;">Téléphone : 05 59 84 12 27</a>
                <div class="doctor-address" style="color: white;">Adresse : 38 rue Berlioz, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=29b30c8e-6e7f-4ef0-96fc-88a4b1c29735")}>Prendre rendez-vous</button>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Isabelle Ader Casedevant</div>
                <img class="doctor-image" src="images/IsabelleAderCasedevant.jpg" alt="Dr Isabelle Ader Casedevant"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lundi 9h00-12h00, 13h00-19h00</li>
                        <li>Mardi 9h00-12h00, visites à domicile l'après-midi</li>
                        <li>Mercredi avec un médecin remplaçant 9h00-12h00, 14h00-19h00</li>
                        <li>Jeudi 9h00-12h00, 14h00-17h00</li>
                        <li>Vendredi 9h00-12h00, 14h00-19h00</li>
                        <li>Samedi matin (uniquement pour les urgences en alternance avec les autres médecins de la maison de santé)</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559840002" style="color: white;">Téléphone : 05 59 84 00 02</a>
                <div class="doctor-address" style="color: white;">Adresse : 153 Boulevard de la paix, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=b3aa4ed8-11b0-442c-94e2-f772a0659412")}>Prendre rendez-vous</button>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Laure Elise Martin</div>
                <img class="doctor-image" src="images/LaureEliseMartin.jpg" alt="Dr Laure Elise Martin"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lundi 9h00-12h00, visites à domicile l'après-midi de 14h00 à 17h00, consultations de 17h00 à 18h00</li>
                        <li>Mardi 9h00-12h00, 14h00-19h00</li>
                        <li>Mercredi avec un médecin remplaçant 9h00-12h00, 14h00-19h00</li>
                        <li>Jeudi 9h00-12h00, 14h00-17h00</li>
                        <li>Vendredi 9h00-12h00, 14h00-19h00</li>
                        <li>Samedi matin (uniquement pour les urgences en alternance avec les autres médecins de la maison de santé)</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559840002" style="color: white;">Téléphone : 05 59 84 00 02</a>
                <div class="doctor-address" style="color: white;">Adresse : 153 Boulevard de la paix, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=a7c6b4b2-be31-4658-be7b-9dc2b8a64725")}>Prendre rendez-vous</button>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Dr. Laura Arroyo Olalla (médecin collaboratrice)</div>
                <img class="doctor-image" src="images/LauraArroyoOllala.jpg" alt="Dr Laura Arroyo Olalla"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Mardi 9h00-12h00, 14h00-16h00</li>
                        <li>Mercredi 9h00-12h00, 14h00-18h00</li>
                        <li>Jeudi 9h00-12h00, 14h00-18h00</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559840002" style="color: white;">Téléphone : 05 59 84 00 02</a>
                <div class="doctor-address" style="color: white;">Adresse : 153 Boulevard de la paix (1ère étage), 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau?practitioner=2105504f-f18d-44e6-9ca7-9a7f4221bac4")}>Prendre rendez-vous</button>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>
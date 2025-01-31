<script lang="ts">
    import { goto } from "$app/navigation";

    let isburgerMenuOpen = false;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }
</script>

<head>
    <title>MSP | Kinésithérapeutes</title>
</head>

<body>
    <div class="doctors-container">
        <h1 style="color: #325592;">Kinésithérapeutes</h1>
        <div class="doctor-card">
            <div class="doctor-title" style="color: white;">
                Jonathan Barberet
            </div>
            <img
                class="doctor-image"
                src="images/JonathanBarberet.jpg"
                alt="Jonathan Barberet"
            />
            <div class="doctor-names" style="color: white;">
                <ul>
                    <li>Du lundi au vendredi de 9h00 à 19h00.</li>
                </ul>
            </div>
            <a class="doctor-phone" href="tel:0559274258" style="color: white;"
                >Téléphone : 05 59 27 42 58.</a
            >
            <div class="doctor-address" style="color: white;">
                Adresse : 125 Boulevard de la Paix, 64000 Pau.
            </div>
        </div>

        <div class="doctor-card">
            <div class="doctor-title" style="color: white;">Émilie Cavero</div>
            <img
                class="doctor-image"
                src="images/EmilieCavero.jpg"
                alt="Émilie Cavero"
            />
            <div class="doctor-names" style="color: white;">
                <ul>
                    <li>Du lundi au jeudi de 8h30 à 18h00.</li>
                    <li>Vendredi de 8h30 à 14h00.</li>
                </ul>
            </div>
            <a class="doctor-phone" href="tel:0559274258" style="color: white;"
                >Téléphone : 05 59 27 42 58.</a
            >
            <div class="doctor-address" style="color: white;">
                Adresse : 125 Boulevard de la Paix, 64000 Pau.
            </div>
        </div>

        <div class="doctor-card">
            <div class="doctor-title" style="color: white;">Virginie Leleu</div>
            <img
                class="doctor-image"
                src="images/VirginieLeleu.jpg"
                alt="Virginie Leleu"
            />
            <div class="doctor-names" style="color: white;">
                <ul>
                    <li>Du lundi au vendredi de 9h00 à 19h00.</li>
                </ul>
            </div>
            <a class="doctor-phone" href="tel:0559274258" style="color: white;"
                >Téléphone : 05 59 27 42 58.</a
            >
            <div class="doctor-address" style="color: white;">
                Adresse : 125 Boulevard de la Paix, 64000 Pau.
            </div>
        </div>
        <div style="height: 10vh"></div>
    </div>
    <div class="footer-text">
        <p style="margin-top: 1vh; margin-bottom: 10px;">
            © 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button
                on:click={() => goto("/mentions-legales")}
                class="rgpd-button"
                style="margin-top: 1vh; margin-bottom: 10px;"
                >Mentions légales</button
            >
        </p>
        <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
    </div>
</body>

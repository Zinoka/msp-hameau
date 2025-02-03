<script lang="ts">
    import { goto } from "$app/navigation";

    let isburgerMenuOpen = false;

    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, "_blank");
        }, 0);
    }

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }
</script>

<svelte:head>
    <title>MSP | Pharmaciens</title>
</svelte:head>

<body>
    <div class="doctors-container">
        <h1 style="color: #325592;">Pharmaciens</h1>
        <div class="doctor-card">
            <div class="doctor-title" style="color: white;">
                Frédéric Pinot et Laurent Couret
            </div>
            <div class="doctor-title" style="color: white;">
                Pharmacie de la Paix Aprium
            </div>
            <img
                class="doctor-image"
                style="margin-left: 30%; transform: translateX(-30%);"
                src="images/FredericPinot.png"
                alt="Frédéric Pinot"
            />
            <img
                class="doctor-image"
                style="margin-left: 70%; transform: translateX(-70%);"
                src="images/LaurentCouret.png"
                alt="Laurent Couret"
            />
            <div class="doctor-names" style="color: white;">
                <ul>
                    <li>Du lundi au vendredi de 8h30 à 20h00.</li>
                    <li>Samedi de 8h30 à 19h00.</li>
                </ul>
            </div>
            <a class="doctor-phone" href="tel:0559026647" style="color: white;"
                >Téléphone : 05 59 02 66 47.</a
            >
            <div class="doctor-address" style="color: white;">
                Adresse : 155 Boulevard de la paix, 64000 Pau.
            </div>
            <button
                class="doctor-rdv"
                style="color: #325592;"
                on:click={() =>
                    openExternalLink(
                        "https://pharmacie-de-la-paix.aprium-pharmacie.fr",
                    )}>Site web</button
            >
        </div>

        <div class="doctor-card">
            <div class="doctor-title" style="color: white;">
                Sophie Maréchal
            </div>
            <div class="doctor-title" style="color: white;">
                Pharmacie du centre Berlioz
            </div>
            <img
                class="doctor-image"
                src="images/SophieMarechal.jpg"
                alt="Sophie Maréchal"
            />
            <div class="doctor-names" style="color: white;">
                <ul>
                    <li>
                        Du lundi au vendredi de 8h30 à 12h30 et de 14h00 à
                        19h30.
                    </li>
                    <li>Samedi de 8h30 à 12h30.</li>
                </ul>
            </div>
            <a class="doctor-phone" href="tel:0559026894" style="color: white;"
                >Téléphone : 05 59 02 68 94.</a
            >
            <div class="doctor-address" style="color: white;">
                Adresse : 38 rue Berlioz, 64000 Pau.
            </div>
            <button
                class="doctor-rdv"
                style="color: #325592;"
                on:click={() =>
                    openExternalLink(
                        "https://pharmacieberlioz-pau.pharmavie.fr",
                    )}>Site web</button
            >
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

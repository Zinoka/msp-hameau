<script lang="ts">
    import { goto } from "$app/navigation";
    import { userStore, type AuthUser } from "$lib/stores/authStore";
    import { getToastStore } from "@skeletonlabs/skeleton";
    import { authHandlers } from "$lib/stores/authStore";

    let isburgerMenuOpen = false;

    let email: string;
    let password: string;
    let success: boolean | undefined = undefined;

    const toastStore = getToastStore();

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    const login = async () => {
        try {
            const userCredential: AuthUser | undefined =
                await authHandlers.logIn(email, password);

            if (userCredential) {
                success = true;
                $userStore = {
                    uid: userCredential?.uid,
                    email: userCredential?.email,
                };
                await goto("/protected/ads");
            } else {
                success = false;
            }
        } catch (err) {
            throw new Error(`Erreur lors de la connexion ${err}`);
        }
    };
</script>

<head>
    <title>MSP | Login</title>
</head>

<body>
    <div class="login-container">
        <div class="login-form">
            <h1 style="margin-bottom: 40px; text-align: center;">Connexion</h1>
            <form
                class="login-form"
                action="#"
                on:submit|preventDefault={login}
            >
                <label style="margin-bottom: 10px;" for="username"
                    >Nom d'utilisateur</label
                >
                <input
                    style="margin-bottom: 20px; height: 30px;"
                    type="text"
                    id="username"
                    name="username"
                    bind:value={email}
                    required
                />
                <label style="margin-bottom: 10px;" for="password"
                    >Mot de passe</label
                >
                <input
                    style="margin-bottom: 20px; height: 30px;"
                    type="password"
                    id="password"
                    name="password"
                    bind:value={password}
                    required
                />
                {#if success === false}
                    <p style="color: red; text-align: center;">
                        Merci de vérifier vos identifiants.
                    </p>
                {/if}
                <button class="tuto-button" type="submit">Se connecter</button>
            </form>
        </div>
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

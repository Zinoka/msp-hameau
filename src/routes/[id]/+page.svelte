<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageServerData } from "./$types"
    import { userStore, authHandlers } from '$lib/stores/authStore';
	export let data: PageServerData

    if (data.article.description) {
        data.article.description = data.article.description.replace(/\\n/g, '\n');
    }
    
	let isburgerMenuOpen = false;
    let init = true;

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

	async function scrollToDiv(name: string) {
        await goto("/");
        const element = document.getElementById(name);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    function formatDate(date: string) {
        const dateObj = new Date(date);
        const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(dateObj);
    }

    $: authUser = userStore
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Article { data.article.id }</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/index.css">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="preconnect" href="css/article.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href="css/rdv.css">
        <link rel="stylesheet" href="css/article.css">

    </head>
    <body>
		<div class="rdv-tuto">
            <div class="rdv-tuto-title">{ data.article.title }</div>
            {#if data.article.imageName}
                <img src="uploads/{ data.article.imageName }" alt="{ data.article.title }">
            {:else}
                <img src="images/logo.png" alt="Logo par defaut MSP">
            {/if}
            <div class="rdv-tuto-sub-title">Publié le { formatDate(data.article.created_at) }</div>
            <div class="rdv-tuto-text">
                <div class="tuto-text">
                    <p style="white-space: pre-wrap;">{ data.article.description }</p>
                </div>
            </div>
            <div style="height: 10vh"></div>
        </div>        
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>
<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageServerData } from "./$types"
	export let data: PageServerData

    if (data.article.description) {
        data.article.description = data.article.description.replace(/\\n/g, '\n');
    }
    
	let isburgerMenuOpen = false;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function formatDate(date: string) {
        const dateObj = new Date(date);
        const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(dateObj);
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Article { data.article.id }</title>
        <link rel="preconnect" href="css/index.css">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="preconnect" href="css/article.css">
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
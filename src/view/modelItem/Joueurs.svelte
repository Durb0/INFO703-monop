<script lang="ts">
    import type { Joueur } from "../../model/Joueur";
    import { joueurSurvole } from "../../store/joueurSurvole";
    import { partieStore } from "../../store/partieStore";


    let joueurs:Joueur[] = [];
    let joueurCourant:Joueur = null;

    partieStore.subscribe((value) => {
        joueurs = value.getJoueurs();
        joueurCourant = value.getTourCourant().getJoueurCourant();
    });

    function handleHoverJoueur(joueur:Joueur) {
        joueurSurvole.set(joueur);
    }

    function handleLeaveJoueur() {
        joueurSurvole.set(null);
    }

    
</script>

<template lang="pug">
    div(class="joueurs")
        +each('joueurs as joueur')
            <div class="joueurs__joueur {joueurCourant == joueur ?'joueurs__joueur--courant':''}" on:mouseover={handleHoverJoueur(joueur)} on:mouseleave={handleLeaveJoueur}>
                p {joueur.getNom()}
                p {joueur.getArgent()}
            </div>
</template>

<style lang="scss">
    .joueurs{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;

        &__joueur{
            border: 1px solid black;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;

            &--courant{
                background-color: lawngreen;
            }
        }
    }
</style>
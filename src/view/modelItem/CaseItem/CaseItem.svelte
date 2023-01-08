<script lang="ts">
    import {Case, CaseAchetable, CasePropriete} from "../../../model/case"
    import { EtatAchetable, EtatAchete } from "../../../model/etat/etatPropriete";

    export let c!: Case;
    export let area!: string;
    export let rot!: string;

    /**
     * definit la taille de la police pour le nom selon sa taille, plus elle est grande plus la police est petite
     * 
     * Le texte ne doit pas depasser la case (soit 66px)
     * 
     * @returns la taille de la police en em
     */
    function defineNameSize():number{
        let taille = c.getNom().length;
        let tailleMax = 66;
        let taillePolice = 1;
        let taillePoliceMax = 0.5;
        let taillePoliceMin = 0.1;
        let taillePoliceStep = 0.1;

        if(taille > tailleMax){
            return taillePoliceMin;
        }

        while(taillePolice > taillePoliceMax){
            taillePolice -= taillePoliceStep;
            taille -= tailleMax;
        }

        return taillePolice;
    }

</script>

<template>
    <div class="case" style="grid-area: {area}; transform: {rot}">
        {#if c instanceof CasePropriete}
            <div class="case__quartier" style="background-color: {c.getQuartier().getCouleur()}">

            </div>
        {/if}
        <span class="case__nom" style="font-size: {defineNameSize()}em">{c.getNom()}</span>
        <div class="case__joueurs">
            {#each c.getJoueurs() as j}
                <span>{j.getNom()}</span>
            {/each}
        </div>
        <div class="case__prix">
            {#if c instanceof CasePropriete}
                {#if c.getEtat() instanceof EtatAchetable}
                    <span class="case__prix--available">{c.getPrix()}</span>
                {:else if c.getEtat() instanceof EtatAchete}
                    <span class="case__prix--unavailable">{c.getLoyer()}</span>
                {/if}
            {/if}
        </div>
    </div>
</template>

<style lang="scss">
    .case {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid black;
        gap: 5px;

        &__quartier {
            height: 10px;
            width: -webkit-fill-available;
            border-bottom: 2px solid black;
        }

        &__nom {
        }

        &__joueurs {
            height: 50px;
            width: -webkit-fill-available;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 5px;
        }

        &__prix {
            width: -webkit-fill-available;
            flex-wrap: wrap;
            gap: 5px;

            &--available {
                color: green;
            }

            &--unavailable {
                color: red;
            }
        }
    }

    
</style>
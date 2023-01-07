<script lang="ts">
    import {Case, CaseAchetable, CasePropriete} from "../../../model/case"

    export let c!: Case;

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

    function defineNbCasePerSide():number{
        return 0;
    }

</script>

<template>
    <div class="case">
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
        <div class="case_prix">
            {#if c instanceof CaseAchetable}        
                <span>{c.getPrix()}</span>
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
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        gap: 5px;

        &__quartier {
            height: 5px;
            width: -webkit-fill-available;
            padding:5px;
            border-radius: 10px;
        }

        &__nom {
        }

        &__joueurs {
            height: 50px;
            width: -webkit-fill-available;
            background-color: antiquewhite;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 5px;
        }
    }

    
</style>
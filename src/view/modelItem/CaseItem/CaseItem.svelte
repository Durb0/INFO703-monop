<script lang="ts">
    import {Case, CaseAchetable, CasePropriete} from "../../../model/case"
    import { EtatAchetable, EtatAchete } from "../../../model/etat/etatPropriete";
    import { CaseSelectedController } from "../../../controller/CaseSelectedController";
    import { joueurSurvole } from "../../../store/joueurSurvole";
    import { CaseGare } from "../../../model/case/caseAchetable/CaseGare";
    import { CaseService } from "../../../model/case/caseAchetable/CaseService";


    export let c!: Case;
    export let area!: string;
    export let rot!: string;

    let caseCouranteController = new CaseSelectedController();

    let estCaseDeSurvole:boolean = false;

    joueurSurvole.subscribe((joueur) => {
        if(joueur == null){
            estCaseDeSurvole = false;
            return;
        }else{
            if(c instanceof CaseAchetable){
                estCaseDeSurvole = c.getProprietaire() == joueur;
                return;
            }
        }
        estCaseDeSurvole = false;
    })

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

    function handleClickCase(){
        caseCouranteController.setCaseSelected(c);
    }

</script>

<template>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="case {estCaseDeSurvole ? 'case--survole': ''}" style="grid-area: {area}; transform: {rot}" on:click={handleClickCase}>
        {#if c instanceof CasePropriete}
            <div class="case__quartier" style="background-color: {c.getQuartier().getCouleur()}">
                {#if c.getNbMaisons() == 5}
                    <div class="case__quartier__hotel"></div>
                {:else}
                    {#each Array(c.getNbMaisons()) as _,i}
                        <div class="case__quartier__maison"></div>
                    {/each}
                {/if}
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
            {#if c instanceof CaseGare}
                {#if c.getProprietaire() == null}
                    <span class="case__prix--available">{c.getPrix()}</span>
                {:else}
                    <span class="case__prix--unavailable">{c.getLoyer()}</span>
                {/if}
            {/if}
            {#if c instanceof CaseService}
                {#if c.getProprietaire() == null}
                    <span class="case__prix--available">{c.getPrix()}</span>
                {:else}
                    <span class="case__prix--unavailable">Des * {c.getGroupeService().isMonopole(c.getProprietaire())? 10: 4}</span>
                {/if}
            {/if}
        </div>
    </div>
</template>

<style lang="scss">
    .case {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid black;
        gap: 5px;

        &--survole {
            background-color: lightcoral;
        }

        &__quartier {
            height: 15px;
            width: -webkit-fill-available;
            border-bottom: 2px solid black;
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            justify-content: center;

            &__maison {
                height: 10px;
                width: 10px;
                background-color: green;
                border:1px solid black;
            }

            &__hotel {
                height: 10px;
                width: 10px;
                background-color: red;
                border:1px solid black;
            }
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
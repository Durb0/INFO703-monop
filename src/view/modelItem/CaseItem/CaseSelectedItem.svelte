<script lang="ts">
    import { CaseAchetable, CasePropriete } from "../../../model/case";
    import { caseSelected } from "../../../store/caseSelected";
    import { CaseSelectedController } from "../../../controller/CaseSelectedController";

    let caseSelectedController = new CaseSelectedController();

    function handleConstruireMaison(){
        if($caseSelected instanceof CasePropriete){
            caseSelectedController.construireMaison();
        }
    }

    function handleVendreMaison(){
        if($caseSelected instanceof CasePropriete){
            caseSelectedController.vendreMaison();
        }
    }

</script>

<template>
    <div class="case-selected">
        <h1>Case sélectionnée</h1>
        {#if $caseSelected != null}
            <div class="case-selected__content">
                <h2>{$caseSelected.getNom()}</h2>
                {#if $caseSelected instanceof CasePropriete}
                    <div class="case-selected__content__quartier" style="background-color:{$caseSelected.getQuartier().getCouleur()};">

                    </div>
                {/if}
                {#if $caseSelected instanceof CaseAchetable}
                    <div class="case-selected__content__proprietaire">
                        <span>Proprietaire : 
                            {#if $caseSelected.getProprietaire()}
                                {$caseSelected.getProprietaire().getNom()}
                            {:else}
                                Aucun
                            {/if}
                        </span>
                    </div>
                {/if}
                {#if $caseSelected instanceof CasePropriete}
                    <h3>Pannel des loyers</h3>
                    {#each $caseSelected.getLoyers() as loyer,i}
                        <div class="case-selected__content__loyer">
                            <span>Loyer {i} : {loyer}</span>
                        </div>
                    {/each}
                    <h3>Maisons</h3>
                    <p>Prix maison : {$caseSelected.getQuartier().getPrixMaison()}</p>
                    <div class="case-selected__content__maisons">
                        <button on:click={handleVendreMaison}>-</button>
                        {#each Array($caseSelected.getNbMaisons()) as _,i}
                            <div class="case-selected__content__maisons__maison">
                            </div>
                        {/each}
                        <button on:click={handleConstruireMaison}>+</button>
                    </div>
                    
                {/if}
            </div>
        {/if}
    </div>
</template>

<style lang="scss">
    .case-selected{
        display: flex;
        flex-direction: column;
        border:1px solid black;

        &__content{
            display: flex;
            flex-direction: column;
            gap: 5px;

            &__quartier{
                height: 10px;
                width: -webkit-fill-available;
                border-bottom: 2px solid black;
            }

            &__maisons{
                display: flex;
                flex-direction: row;
                gap: 5px;
                justify-content: center;
                align-items: baseline;

                &__maison{
                    height: 10px;
                    width: 10px;
                    background-color: green;
                }
            }
        }

    }
</style>
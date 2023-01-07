<script lang="ts">
    import {Case, CasePropriete} from "../../../model/case"

    export let c!: Case;

    /**
     * definit la taille de la police pour le nom selon sa taille, plus elle est grande plus la police est petite
     * 
     * @returns la taille de la police en em
     */
    function defineNameSize():number{
        let size:number = 1;
        if(c.getNom().length > 5){
            size = 0.8;
        }
        if(c.getNom().length > 10){
            size = 0.6;
        }
        if(c.getNom().length > 15){
            size = 0.4;
        }
        return size;
    }

</script>

<template>
    <div class="case">
        {#if c instanceof CasePropriete}
            <div class="case__quartier" style="background-color: {c.getQuartier().getCouleur()}">

            </div>
        {/if}
        <span class="case__nom" style="font-size: {defineNameSize()}em">{c.getNom()}</span>
    </div>
</template>

<style lang="scss">
    .case {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        padding: 5px;

        &__quartier {
            height: 10px;
            padding:5px;
            border-radius: 10px;
        }

        &__nom {
        }
    }

    
</style>
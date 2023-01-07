<script lang="ts">
    import type { Plateau } from "../../model/plateau";
    import CaseItem from "./CaseItem/CaseItem.svelte";



    //les attributs du composant
    export let plateau: Plateau;

    /**
     * fonction qui definit le nombre de case sur un coté
    */
    function getNbCase(): number{
        return Math.sqrt(plateau.getCases().length);
    }


    

</script>

<template>
    <div class="plateau">
        {#each plateau.getCases() as c}
            <CaseItem c={c} />
        {/each}
    </div>
</template>


<style lang="scss">
    .plateau {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        background-color: beige;
        gap: 5px;
        padding: 5px;
    }
</style>
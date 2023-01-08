<script lang="ts">
    import type { Plateau } from "../../model/Plateau";
    import CaseItem from "./CaseItem/CaseItem.svelte";



    //les attributs du composant
    export let plateau: Plateau;

    /**
     * fonction qui definit le nombre de case sur un coté
     * @returns le nombre de case sur un coté en int
     * 
     * doit retourner un int car on utilise cette valeur pour la grille
    */
    function getNbCase(): number{
        let nbCase = plateau.getNbCases();
        let nbCaseTotal = nbCase;
        let nbCaseCote = 0;
        while(nbCase > 0){
            nbCase -= 4;
            nbCaseCote++;
        }
        return nbCaseCote;
    }

    function getTemplate(): string{
        let template = "";
        for(let i = 0; i < getNbCase() + 1; i++){
            template += "100px ";
        }
        return template;
    }

    /**
     * fonction qui retourne la zone de la grille pour une case
     * La case doit se situer sur un coté du plateau
     * 
     * @param index l'index de la case dans le plateau
     * 
     * @returns une string de la forme "ligneDebut / colonneDebut / ligneFin / colonneFin"
     */
    function getGridArea(index:number):string{
        let nbCaseCote = getNbCase();

        if(index < nbCaseCote){
            //haut
            return ` 1 / ${index + 1} / 2 / ${index + 2}`;
        }
        else if(index < nbCaseCote * 2){
            //droite
            return `${index - nbCaseCote + 1} / ${nbCaseCote + 1} / ${index - nbCaseCote + 2} / ${nbCaseCote + 2}`;
        }
        else if(index < nbCaseCote * 3){
            //bas
            return `${nbCaseCote + 1} / ${nbCaseCote - (index - nbCaseCote * 2) + 1} / ${nbCaseCote + 2} / ${nbCaseCote - (index - nbCaseCote * 2) + 2}`;
        }
        else{
            //gauche
            return `${nbCaseCote - (index - nbCaseCote * 3) + 1} / 1 / ${nbCaseCote - (index - nbCaseCote * 3) + 2} / 2`;
        }
    }

    /**
     * fonction qui retourne la rotation de la case
     * 
     * @param index l'index de la case dans le plateau
     * 
     * @returns un string de la forme "rotate(90deg)"
     */
    function getRotation(index:number):string{
        let nbCaseCote = getNbCase();

        if(index < nbCaseCote){
            //haut
            return "rotate(0deg)";
        }
        else if(index < nbCaseCote * 2){
            //droite
            return "rotate(270deg)";
        }
        else if(index < nbCaseCote * 3){
            //bas
            return "rotate(0deg)";
        }
        else{
            //gauche
            return "rotate(90deg)";
        }

    }  

</script>

<template>
    <div class="plateau" style="
        grid-template-rows: {getTemplate()};
        grid-template-columns: {getTemplate()};
    ">
        {#each plateau.getCases() as c, i}
            <CaseItem c={c} area={getGridArea(i)} rot={getRotation(i)}/>
        {/each}
    </div>
</template>


<style lang="scss">
    .plateau {
        height: fit-content;
        width: fit-content;
        display: grid;
        background-color: beige;
        border: 5px solid brown;
    }
</style>
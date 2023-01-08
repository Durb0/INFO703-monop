<script lang="ts">
    import PlateauItem from "../modelItem/PlateauItem.svelte";
    import type { Partie } from "../../model/Partie";
    import { TourController } from "../../controller/TourController";
    import Des from "../core/Des.svelte";
    import { Case, CasePropriete } from "../../model/case";
    import { EtatAchetable } from "../../model/etat/etatPropriete";
    import type { Writable } from "svelte/store";
    import { getPartieStore } from "../../store/partieStore";
    import CaseSelectedItem from "../modelItem/CaseItem/CaseSelectedItem.svelte";

    let conditionAcheter:boolean = true;

    //je crée une instance du controller du tour
    const tourController:TourController = new TourController();

    //je crée un observable sur la partie
    let partieStore:Writable<Partie> = getPartieStore();

    //A chaque fois que la partie change, je récupère la partie
    partieStore = getPartieStore(); 

    let partie:Partie;

    //A chaque fois que la partie change, je récupère la partie
    partieStore.subscribe((value) => {
        partie = value;
        console.log("Partie changée");
        conditionAcheter = defineConditionAcheter();
    });

    function defineConditionAcheter():boolean{
        let caseCourante:Case = partie.getTourCourant().getJoueurCourant().getPosition();

        if(
            caseCourante instanceof CasePropriete && //si la case est une propriété
            caseCourante.getEtat() instanceof EtatAchetable && //si la case est achetable
            partie.getTourCourant().getJoueurCourant().getArgent() >= caseCourante.getPrix() //si le joueur a assez d'argent
            )
        {
                return false;
        }
        return true;
    }

    function handlerTerminerTour(){
        return(event: Event) => {
            tourController.protocolTerminerTour();
        }
    }

    function handlerActionAcheterPropriete() {
        return(event: Event) => {
            tourController.protocolAcheterPropriete();
        }
    }

    function handlerActionAcheterMaison() {
        return(event: Event) => {
            tourController.protocolAcheterMaison();
        }
    }
</script>

<template>
    <div class="partie">
        <div class="partie__blocks">
            <PlateauItem plateau={partie.getPlateau()}>
                <Des tourController={tourController}/>
                <button disabled={conditionAcheter} on:click={handlerActionAcheterPropriete()}>Acheter propriété</button>
        <button on:click={handlerTerminerTour()}>Terminer le tour</button>
            </PlateauItem>
            <CaseSelectedItem/>
        </div>
        
    </div>
</template>
    
<style lang="scss">
    .partie {
        display: block;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        &__blocks {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }
    }
</style>
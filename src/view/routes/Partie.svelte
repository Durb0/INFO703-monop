<script lang="ts">
    import PlateauItem from "../modelItem/PlateauItem.svelte";
    import type { Partie } from "../../model/Partie";
    import { TourController } from "../../controller/TourController";
    import Des from "../core/Des.svelte";
    import { Case, CasePropriete } from "../../model/case";
    import { EtatAchetable } from "../../model/etat/etatPropriete";
    import CaseSelectedItem from "../modelItem/CaseItem/CaseSelectedItem.svelte";
    import { partieStore } from "../../store/partieStore";
    import Joueurs from "../modelItem/Joueurs.svelte";

    let conditionAcheter:boolean = true;
    let conditionTerminerTour:boolean = true;

    //je crée une instance du controller du tour
    const tourController:TourController = new TourController();

    //A chaque fois que la partie change, je récupère la partie
    partieStore.subscribe((value) => {
        console.log("Partie changée");
        conditionAcheter = defineConditionAcheter();
        conditionTerminerTour = defineConditionTerminerTour();
    });

    function defineConditionAcheter():boolean{
        let caseCourante:Case = $partieStore.getTourCourant().getJoueurCourant().getPosition();

        if(
            caseCourante instanceof CasePropriete && //si la case est une propriété
            caseCourante.getEtat() instanceof EtatAchetable && //si la case est achetable
            $partieStore.getTourCourant().getJoueurCourant().getArgent() >= caseCourante.getPrix() //si le joueur a assez d'argent
            )
        {
                return false;
        }
        return true;
    }

    function defineConditionTerminerTour():boolean {
        let tour = $partieStore.getTourCourant();

        if (tour.getPeutLancer() == false) {
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

<template lang="pug">

    div(class="partie")
        div(class="partie__blocks")
            <PlateauItem plateau={$partieStore.getPlateau()}>
                <Des tourController={tourController}/>
                <button disabled={conditionAcheter} on:click={handlerActionAcheterPropriete()}>Acheter propriété</button> 
                <button disabled={conditionTerminerTour} on:click={handlerTerminerTour()}>Terminer le tour</button> 
                <Joueurs/>
            </PlateauItem>
            <CaseSelectedItem/>
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
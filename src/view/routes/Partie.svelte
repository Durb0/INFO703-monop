<script lang="ts">
    import PlateauItem from "../modelItem/PlateauItem.svelte";
    import { PartieController } from "../../controller/partieController";
    import type { Writable } from "svelte/store";
    import type { Partie } from "../../model/Partie";
    import { TourController } from "../../controller/TourController";
    import Des from "../core/Des.svelte";
    import { getPartieStore } from "../../store/partieStore";

    //je crée une instance du controller du tour
    const tourController:TourController = new TourController();

    //je crée une instance du controller de la partie
    const partieController:PartieController = new PartieController();

    //je crée un observable sur la partie
    let partie:Writable<Partie> = getPartieStore();

    //A chaque fois que la partie change, je récupère la partie
    $:partie = getPartieStore();

    const handlerTerminerTour = () => {
        return(event: Event) => {
            tourController.protocolTerminerTour();
        }
    }

</script>

<template>
    <div class="partie">
        <Des tourController={tourController}/>
        <button on:click={handlerTerminerTour()}>Terminer le tour</button>
        <PlateauItem plateau={$partie.getPlateau()} />
    </div>
</template>
    

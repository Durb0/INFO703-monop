<script lang="ts">
    import PlateauItem from "../modelItem/PlateauItem.svelte";
    import { PartieController } from "../../controller/partieController";
    import type { Writable } from "svelte/store";
    import type { Partie } from "../../model/Partie";
    import { TourController } from "../../controller/TourController";
    import Des from "../core/Des.svelte";

    //je crée une instance du controller du tour
    const tourController:TourController = new TourController();

    //je crée une instance du controller de la partie
    const partieController:PartieController = new PartieController();

    //je crée un observable sur la partie
    let partie:Writable<Partie> = partieController.getPartieStore();

    //A chaque fois que la partie change, je récupère la partie
    $:partie = partieController.getPartieStore();
</script>

<template>
    <div class="partie">
        <Des tourController={tourController}/>
        <PlateauItem plateau={$partie.getPlateau()} />
    </div>
</template>
    

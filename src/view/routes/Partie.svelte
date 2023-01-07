<script lang="ts">
    import PlateauItem from "../modelItem/PlateauItem.svelte";
    import { PartieController } from "../../controller/partieController";
    import type { Writable } from "svelte/store";
    import type { Partie } from "../../model/partie";

    //je crée une instance du controller de la partie
    const partieController:PartieController = new PartieController();

    //je crée un observable sur la partie
    let partie:Writable<Partie> = partieController.getPartieStore();

    //A chaque fois que la partie change, je récupère la partie
    $:partie = partieController.getPartieStore();
</script>

<template>
    <div class="partie">
        <PlateauItem plateau={$partie.getPlateau()} />
    </div>
</template>
<script lang="ts">
    import { PartieController } from "../../controller/partieController";
    import { Link } from "svelte-routing";
    import type { Writable } from "svelte/store";
    import type { Partie } from "../../model/Partie";
    import { partieStore } from "../../store/partieStore";

    //je crée une instance du controller de la partie
    const partieController:PartieController = new PartieController();

    //Les fonctions lorsque j'appuie sur les boutons

    const handleAjouterJoueur = (nom:string) => {
        return(event: Event) => {
            //appelle la fonction du controller
            partieController.ajouterJoueur(nom);
            //réinitialise le nom
            nomChoisi="";
        }
    }

    const handleSupprimerJoueur = (nom:string) => {
        return(event: Event) => {
            partieController.supprimerJoueur(nom);
        }
    }

    const handleCommencerPartie = () => {
        return(event: Event) => {
            partieController.lancerPartie();
        }
    }

    let nomChoisi:string = "";

</script>

<div class="list-joueur">
    <!-- pour chaque joueur je crée un item pour l'afficher -->
    {#each $partieStore.getJoueurs() as joueur}
        <div class="joueur">
            <div class="nom">{joueur.getNom()}</div>
            <button on:click={handleSupprimerJoueur(joueur.getNom())}>Supprimer</button>
        </div>
    {/each}

    <!-- le formulaire pour ajouter un joueur -->
    <div class="list-joueur_form">
        <input bind:value={nomChoisi} type="text" name="nom" placeholder="Nom du joueur">
        <button on:click={handleAjouterJoueur(nomChoisi)}>Ajouter</button>
    </div>

    <!-- le bouton pour commencer la partie -->
    <!-- le Link permet de changer le route -->
    <Link to="/partie">
        <button on:click={handleCommencerPartie()}>
            Commencer la partie
        </button>
    </Link>
</div>

<style lang="scss">
    .list-joueur {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        margin: auto auto;
        gap: 5px;
        .joueur {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: #f1f1f1;
            border-radius: 5px;
            padding: 5px;
            .nom {
                width: 100%;
                height: 100%;
                text-align: initial;
            }
        }
        .list-joueur_form {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            gap:10px;
            input {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
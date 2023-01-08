import { Writable, writable } from "svelte/store";
import type { Joueur } from "../model/Joueur";

export let joueurSurvole:Writable<Joueur> | null = writable<Joueur>(null);
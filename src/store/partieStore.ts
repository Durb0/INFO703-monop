import { writable, Writable } from "svelte/store";
import { Partie } from "../model/Partie";

export let partieStore:Writable<Partie> = writable<Partie>(Partie.getInstance());


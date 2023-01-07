import { writable, Writable } from "svelte/store";
import { Partie } from "../model/Partie";


let partieStore:Writable<Partie> = writable<Partie>(Partie.getInstance());

export function getPartieStore():Writable<Partie>{
    return partieStore;
}
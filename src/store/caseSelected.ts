import { writable, Writable } from "svelte/store";
import type { Case } from "../model/case";

export let caseSelected:Writable<Case> | null = writable<Case>(null);
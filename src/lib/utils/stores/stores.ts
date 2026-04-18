import { writable } from "svelte/store";

let isActive = writable(false);

export {
    isActive,
}
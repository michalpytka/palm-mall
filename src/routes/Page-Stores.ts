import { writable } from 'svelte/store';

export const loadingFinished = writable(false);
export const sceneRotating = writable(true);
export const startMenuVisible = writable(false);

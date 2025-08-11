import { writable } from 'svelte/store';

export const sceneRotating = writable(true);

// Windows flags
export const loadingInProgress = writable(true);
export const startMenuVisible = writable(false);
export const creditWindowVisible = writable(false);
export const calculatorVisible = writable(false);
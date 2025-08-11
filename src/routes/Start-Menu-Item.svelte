<script lang="ts">
    import type { Writable } from 'svelte/store';
    import { startMenuVisible } from './Page-Stores';

    export let title = "";
    export let icon = "";
    export let openWindowFlagStore: Writable<boolean> | undefined = undefined;

    function pressed() {
        if (openWindowFlagStore) {
            openWindowFlagStore.set(true);
        }
        startMenuVisible.set(false);
    }
</script>

<button class="menu-button" on:mousedown={pressed}>
    <div class="menu-item">
        <img class="icon" src={icon} alt="Icon">
        <span class="title">{title}</span>
    </div>
</button>

<style>
    .menu-item {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        margin: 1px 2px 1px 0;
        background-color: #c0c0c0;
        color: black;
        float: left;
    }

    .menu-item:hover {
        background-color: #003077;
        color: white;
    }

    .icon {
        height: 30px;
        width: 30px;
    }

    .menu-button {
        padding: 0 3px 0 0;
        background: none;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    .title {
        font-family: sans-serif;
    }
</style>
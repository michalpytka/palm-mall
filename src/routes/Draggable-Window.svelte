<script lang="ts">
    import ExitButton from "./Exit-Button.svelte";
    import type { Writable } from 'svelte/store';
    let innerWidth = 0;
    let innerHeight = 0;
   
    export let x = 0;
    export let y = 0;
    export let windowHeight: number;
    export let windowWidth: number;
    export let title: string;
    export let iconSrc: string;
    export let isClosable: boolean;
    export let windowVisibleFlagStore: Writable<boolean> | undefined = undefined;

    const borderSizeInPx = 4;
    const toolbarHeightInPx = 35;
   
    let moving = false;
    let exitButtonDisplay = isClosable ? "block" : "none";
   
    $: if (innerWidth > 0 && innerHeight > 0) {
        x = innerWidth / 2 - windowWidth / 2;
        y = innerHeight / 2 - windowHeight / 2;
    }
   
    function onMouseDown() {
        moving = true;
    }
   
    function onMouseMove(e: { movementX: number; movementY: number; }) {
        const rightBound = innerWidth - windowWidth - borderSizeInPx;
        const bottomBound = innerHeight - windowHeight - borderSizeInPx - toolbarHeightInPx;
        if (moving) {
            if (x >= 0 && x <= rightBound) {
                x += e.movementX;
            }
            if (y >= 0 && y <= bottomBound) {
                y += e.movementY;
            }
            if (y < 0) {
                y = 0;
            } else if (y > bottomBound) {
                y = bottomBound;
            }
            if (x < 0) {
                x = 0;
            } else if (x > rightBound) {
                x = rightBound;
            }
        }
    }
   
    function onMouseUp() {
        moving = false;
    }

    function onExitButtonMouseUp() {
        if (windowVisibleFlagStore && $windowVisibleFlagStore) {
            windowVisibleFlagStore.set(false);
        }
    }

    function onKeyDown(e: KeyboardEvent) {
        const step = e.shiftKey ? 10 : 1;
       
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                x -= step;
                break;
            case 'ArrowRight':
                e.preventDefault();
                x += step;
                break;
            case 'ArrowUp':
                e.preventDefault();
                y -= step;
                break;
            case 'ArrowDown':
                e.preventDefault();
                y += step;
                break;
        }
    }
</script>

<style>
    .window {
        position: absolute;
        border: solid;
        background-color: #c0c0c0;
        border-width: 2px;
        border-color: #efefef #3a3a3a #3a3a3a #efefef;
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .title {
        height: 25px;
        background-image: linear-gradient(to right, #000083, 50%, #0085d8);
        margin: 2px 2px 0 2px;
        border-radius: 1px;
        font-size: 14px;
        color: white;
        float: left;
        width: calc(100% - 4px);
        user-select: none;
        cursor: move;
    }
   
    .title-text {
        font-family: sans-serif;
        float: left;
        align-items: center;
        margin: 4px 0 0 0;
    }

    .content {
        background-color: #c0c0c0;
        display: flex;
    }

    .logo {
        margin: 1px 0 0 0;
        height: 23px;
        width: 23px;
        float: left;
    }
    
    .exit-button {
        float: right;
        margin: 4px 3px 0 0;
        cursor: default;
        display: none;
    }
</style>

<div 
    tabindex="-1" 
    style="left: {x}px; top: {y}px; width: {windowWidth}px; height: {windowHeight}px;" 
    class="window"
>
    <div role="dialog" tabindex="0" aria-label="Draggable dialog" class="title" on:mousedown={onMouseDown} on:keydown={onKeyDown}>
        <img class="logo" src={iconSrc} alt="Binbows Logo">
        <div class="title-text">{title}</div>
        <div class="exit-button" role="dialog" tabindex="0" style="display: {exitButtonDisplay}" on:mouseup={onExitButtonMouseUp}>
            <ExitButton/>
        </div>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>

<svelte:window bind:innerWidth bind:innerHeight on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
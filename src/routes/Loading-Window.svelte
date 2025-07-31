<script lang="ts">
    import DraggableWindow from './Draggable-Window.svelte';
    import { hasLoadingFinished } from './Loading-Window-Store';
</script>

<style>
    .window-content {
        font-family: sans-serif;
        text-align: center;
    }
</style>

{#if !$hasLoadingFinished}
    <DraggableWindow windowHeight={110} windowWidth={200} title="Please wait" iconSrc="wait-icon.png" isClosable={false}>
        <div class="window-content">Interactive background is loading</div>
    </DraggableWindow>
{/if}

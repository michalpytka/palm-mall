<script lang="ts">
    import DraggableWindow from './Draggable-Window.svelte';
    import { calculatorVisible } from './Page-Stores';
</script>

<style>

</style>

{#if $calculatorVisible}
    <DraggableWindow windowHeight={260} windowWidth={200} title="Calculator" iconSrc="calculator-icon.png" isClosable={true} windowVisibleFlagStore={calculatorVisible}>
        Calculator
    </DraggableWindow>
{/if}

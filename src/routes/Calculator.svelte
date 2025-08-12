<script lang="ts">
    import DraggableWindow from './Draggable-Window.svelte';
    import { calculatorVisible } from './Page-Stores';
</script>

<style>
    .window-content {
        font-family: sans-serif;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .underline {
        text-decoration: underline;
    }

    .toolbar {
        font-size: 12px;
        width: 100%;
        margin: 2px 0 2px 8%;
    }

    .display {
        background-color: white;
        border: solid;
        border-width: 2px;
        border-color:  #3a3a3a #efefef #efefef #3a3a3a;
        height: 20px;
        width: 90%;
    }

    .display-text {
        font-family: sans-serif;
        float: right;
        font-size: 12px;
    }
</style>

{#if $calculatorVisible}
    <DraggableWindow windowHeight={240} windowWidth={240} title="Calculator" iconSrc="calculator-icon.png" isClosable={true} windowVisibleFlagStore={calculatorVisible}>
        <div class="window-content">
            <div class="toolbar">
                <span class="underline">E</span><span>dit</span>
                <span class="underline">V</span><span>iew</span>
                <span class="underline">H</span><span>elp</span>
            </div>
            <div class="display">
                <span class="display-text">0</span>
            </div>
        </div>
    </DraggableWindow>
{/if}

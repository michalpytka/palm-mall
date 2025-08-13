<script lang="ts">
    import DraggableWindow from './Draggable-Window.svelte';
    import { creditWindowVisible } from './Page-Stores';
</script>

<style>
    .window-content {
        font-family: sans-serif;
        text-align: center;
        flex-direction: column;
        display: flex;
        width: 100%;
        margin-top: 10px;
    }

    .title-font {
        font-weight: 600;
    }

    .regular-font {
        font-weight: 400;
    }

    .divider {
        margin: 10px 25px 10px 25px;
    }
</style>

{#if $creditWindowVisible}
    <DraggableWindow windowHeight={270} windowWidth={200} title="Credit" iconSrc="paint-icon.png" isClosable={true} windowVisibleFlagStore={creditWindowVisible}>
        <div class="window-content">
            <div class="title-font">Page author</div>
            <div class="regular-font">Michał P.</div>
            <hr class="divider"/>
            <div class="title-font">Model author</div>
            <div class="regular-font">Michał P. (mostly)</div>
            <hr class="divider"/>
            <div class="title-font">Palm model</div>
            <div class="regular-font"><a href="https://skfb.ly/6vyzZ">Surya @sketchfab</a></div>
            <hr class="divider"/>
            <div class="title-font">Background</div>
            <div class="regular-font"><a href="https://wallpapercave.com/aesthetic-windows-98-wallpapers">wallpapercave.com</a></div>
        </div>
    </DraggableWindow>
{/if}

<script lang="ts">
    import { startMenuVisible } from './Page-Stores';
    import StartMenuItem from './Start-Menu-Item.svelte';

    let menuHeight = $state(200);
    let menu: HTMLDivElement|undefined = $state(undefined);

    $effect(() => {
        if ($startMenuVisible && menu) {
            menuHeight = menu.clientHeight;
        }
    });
</script>
{#if $startMenuVisible}
    <div bind:this={menu} class="start-menu" style="margin-top: -{menuHeight}px;">
        <div class="os-version-bar">
            MichaelSoft Binbows 97
        </div>
        <div class="menu-list">
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
            <StartMenuItem>
                Test
            </StartMenuItem>
        </div>
    </div>
{/if}

<style>
    .start-menu {
        position: absolute;
        width: 220px;
        background-color: #c0c0c0;
        border-style: solid;
        border-width: 2px;
        border-color: #efefef #3a3a3a #3a3a3a #efefef;
        display: flex;
    }

    .os-version-bar {
        background-image: linear-gradient(to top, #000204, 50%, #0605d0);
        color: white;
        font-family: sans-serif;
        writing-mode: tb-rl;
        transform: rotate(-180deg);
        padding: 2px 2px 20px 2px;
        margin: 1px;
    }

    .menu-list {
        display: inline;
        width: 100%;
    }
</style>
<script lang="ts">
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import Toolbar from './Toolbar.svelte';
    import LoadingWindow from './Loading-Window.svelte';
    import StartMenu from './Start-Menu.svelte';
    import CreditWindow from './Credit-Window.svelte';
    import Calculator from './Calculator.svelte';
</script>

<div class="page-container">
    <Canvas>
        <Scene/>
    </Canvas>
    <StartMenu/>
    <Toolbar/>
    <LoadingWindow/>
    <CreditWindow/>
    <Calculator/>
</div>

<style>
    .page-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 35px);
    }
</style>

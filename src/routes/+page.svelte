<script lang="ts">
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import Toolbar from './Toolbar.svelte';
    import LoadingWindow from './Loading-Window.svelte';
</script>

<div class="page-container">
    <Canvas>
        <Scene/>
    </Canvas>
    <Toolbar/>
    <LoadingWindow/>
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

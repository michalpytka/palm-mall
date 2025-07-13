<script>
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import Toolbar from './Toolbar.svelte';
</script>


<div class="page-container">
<Canvas>
  <Scene/>
</Canvas>
<Toolbar/>
</div>


<style>
  .page-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 33px);
    z-index: -1; /* Ensure canvas is behind other content */
    background-color: bisque;
  }
</style>

<script>
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte'
</script>


<div class="canvas-container">
<Canvas>
  <Scene/>
</Canvas>
<div class="toolbar">
  <div class="toolbar-top-border">

  </div>
</div>
</div>


<style>
  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 38px);
    z-index: -1; /* Ensure canvas is behind other content */
    background-color: bisque;
  }
  
  .toolbar {
    width: 100%;
    height: 35px;
    background-color: #b8b8b8;
    border-width: 3px 0px 0px 0px;
    border-color: #f5f2ef;
    border-style: solid;
  }

  .toolbar-top-border {
    height: 1px;
    width: 100%;
    border-color: #b8b8b8;
    border-width: 2px 0px 0px 0px;
    border-color: #acb0af;
    border-style: solid;
  }
</style>

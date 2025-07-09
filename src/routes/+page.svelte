<script>
    import Scene from './Scene.svelte'
    export const prerender = true;
    
</script>


<div class="canvas-container">
<Scene/>
</div>

<style>
    /* Set canvas to cover the whole screen */
    .canvas-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh; /* Viewport height */
      z-index: -1; /* Ensure canvas is behind other content */
    }
  
</style>

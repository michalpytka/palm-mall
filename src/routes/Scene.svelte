<script lang="ts">
  import { T } from '@threlte/core'
  import { interactivity, OrbitControls, useGltf, Environment } from '@threlte/extras'
  import { hasLoadingFinished } from './Loading-Window-Store'
  
  interactivity();

  const mall = useGltf('/src/lib/assets/palm-mall.glb');

  $: if ($mall) {
    hasLoadingFinished.set(true);
  }
</script>

{#if $mall}
  <T is={$mall.scene}/>
{/if}

<T.DirectionalLight 
  position={[0, 100, 100]} 
  castShadow
/>

<T.PerspectiveCamera 
  makeDefault 
  position={[19.839524161174985, 45.62313716607679, 64.22639143722687]}
  fov={65}>
  <OrbitControls
    panSpeed={0.2}
    rotateSpeed={0.2}
  />
</T.PerspectiveCamera>

<Environment
  url="wallpaper.png"
  isBackground={true}
/>

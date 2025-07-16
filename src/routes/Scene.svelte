<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls, useGltf, Environment } from '@threlte/extras'
  
  interactivity();
  let rotation = $state(0);
  
  useTask((delta) => {
    rotation += delta
  })
  
  const mall = useGltf("/src/lib/assets/palm-mall.glb");
</script>

<T.PerspectiveCamera
  makeDefault
  position={[20, 70, 30]}
  oncreate={(ref) => {
    ref.lookAt(0, 0, 0)
  }}
/>

{#if $mall}
  <T is={$mall.scene}/>
{/if}

<T.DirectionalLight 
  position={[0, 10, 10]} 
  castShadow
/>

<T.PerspectiveCamera makeDefault position={[0, 3, 150]} fov={65}>
  <OrbitControls />
</T.PerspectiveCamera>

<Environment
  url="wallpaper.png"
  isBackground={true}
/>

<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  
  interactivity();
  const scale = new Spring(1);
  let rotation = $state(0);
  
  useTask((delta) => {
    rotation += delta
  })
  
  const mall = useGltf("/src/lib/assets/palm-mall.glb");
</script>

<T.PerspectiveCamera
  makeDefault
  position={[20, 50, 30]}
  oncreate={(ref) => {
    ref.lookAt(0, -1, -5)
  }}
/>

{#if $mall}
  <T.Mesh
    position={[20, 0, 0]}
    rotation.y={0.2}
    rotation.x={1.4}
    rotation.z={-1.4}
    geometry={$mall.nodes.Stairs.geometry}
    scale={scale.current}
    onpointerenter={() => {
      scale.target = 1.5
    }}
    onpointerleave={() => {
      scale.target = 1
    }}
    castShadow
  >
    <T.MeshStandardMaterial 
      color="green"
    />
  </T.Mesh>
{/if}

<T.DirectionalLight 
  position={[0, 10, 10]} 
  castShadow
/>

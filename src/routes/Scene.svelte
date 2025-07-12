<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  interactivity();
  const scale = new Spring(1);

  let rotation = $state(0);

  useTask((delta) => {
    rotation += delta
  })

  const cubes = useGltf("/src/lib/assets/cubes.glb");
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0)
  }}
/>

{#if $cubes}
  <T.Mesh
    position={[0, 3, 0]}
    rotation.y={rotation}
    geometry={$cubes.nodes.cubes.geometry}
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
      color="yellow"
    />
  </T.Mesh>
{/if}

<T.DirectionalLight 
  position={[0, 10, 10]} 
  castShadow
/>

<T.Mesh
  rotation.x={-Math.PI / 2}
  receiveShadow
>
  <T.CircleGeometry args={[4, 40]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
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
  lookAt={[0, 0, 0]}
  castShadow
/>
<T.PerspectiveCamera 
  makeDefault 
  position={[36.22059457473083, 16.688164873834864,36.83093143193632 ]}
  fov={65}
    oncreate={(ref) => {
    ref.lookAt(-44.41931368445728, 0.6745492403623442, 2.816834156625641)
  }}>

  <OrbitControls
    panSpeed={0.2}
    rotateSpeed={0.2}
    target.x={-44.41931368445728}
    target.y={0.6745492403623442}
    target.z={2.816834156625641}
  />
</T.PerspectiveCamera>
<Environment
  url="wallpaper.png"
  isBackground={true}
/>
<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls, useGltf, Environment } from '@threlte/extras'
  import { loadingFinished, sceneRotating } from './Page-Stores'
  import { onMount } from 'svelte'
 
  interactivity();
  const mall = useGltf('/src/lib/assets/palm-mall.glb');
  
  $effect(() => {
    if ($mall) {
      loadingFinished.set(true);
    }
  });

  const centerPoint = { x: -44.41931368445728, y: 0.6745492403623442, z: 2.816834156625641 }
  const orbitRadius = 100;
  const orbitHeight = 16.688164873834864;
  const orbitSpeed = 0.05;
  
  let orbitAngle = 0
  let cameraRef: any = $state();
  let orbitControlsRef: any = $state();

  useTask((delta) => {
    if ($sceneRotating && cameraRef) {
      orbitAngle += orbitSpeed * delta
      
      const x = centerPoint.x + Math.cos(orbitAngle) * orbitRadius
      const z = centerPoint.z + Math.sin(orbitAngle) * orbitRadius
      
      cameraRef.position.set(x, orbitHeight, z)

      cameraRef.lookAt(centerPoint.x, centerPoint.y, centerPoint.z)
      
      if (orbitControlsRef) {
        orbitControlsRef.target.set(centerPoint.x, centerPoint.y, centerPoint.z)
        orbitControlsRef.update()
      }
    }
  })

  function stopOrbit() {
    sceneRotating.set(false)
    if (orbitControlsRef) {
      orbitControlsRef.enabled = true
    }
  }

  function handleCanvasInteraction() {
    if ($sceneRotating) {
      stopOrbit()
    }
  }

  function setupInteractionListeners() {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.addEventListener('mousedown', handleCanvasInteraction)
      canvas.addEventListener('touchstart', handleCanvasInteraction)
      canvas.addEventListener('wheel', handleCanvasInteraction)
    }
  }

  function removeInteractionListeners() {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.removeEventListener('mousedown', handleCanvasInteraction)
      canvas.removeEventListener('touchstart', handleCanvasInteraction)
      canvas.removeEventListener('wheel', handleCanvasInteraction)
    }
  }

  onMount(() => {
    setupInteractionListeners()
    return removeInteractionListeners
  })

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
  position={[36.22059457473083, 16.688164873834864, 36.83093143193632]}
  fov={65}
  bind:ref={cameraRef}
  oncreate={(ref) => {
    ref.lookAt(centerPoint.x, centerPoint.y, centerPoint.z)
  }}>
  <OrbitControls
    bind:ref={orbitControlsRef}
    panSpeed={0.2}
    rotateSpeed={0.2}
    target.x={centerPoint.x}
    target.y={centerPoint.y}
    target.z={centerPoint.z}
  />
</T.PerspectiveCamera>

<Environment
  url="wallpaper.png"
  isBackground={true}
/>
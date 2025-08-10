<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { sceneRotating } from './Page-Stores';
  
  let currentTime: Date = new Date();
  let interval: NodeJS.Timeout | null = null;
  
  function updateTime(): void {
    currentTime = new Date();
  }
  
  function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
  }
  
  onMount((): void => {
    updateTime();
    
    interval = setInterval(updateTime, 1000);
  });
  
  onDestroy((): void => {
    if (interval) {
      clearInterval(interval);
    }
  });

  function rotateButtonPressed(): void {
    sceneRotating.set(!$sceneRotating);
  }
</script>

<div class="clock-container">
    <button class="rotate-button" on:mousedown={rotateButtonPressed}>
      <img class="rotate-icon" alt="rotate icon" src="rotate-icon.png">
    </button>
    <span class="clock-text">{formatTime(currentTime)}</span>
</div>

<style>
    .clock-container {
        width: 92px;
        height: 22px;
        border: solid;
        border-width: 2px;
        border-color: #7e7e7e #f5f2ef #f5f2ef #7e7e7e;
        margin-right: 3px;
    }

    .rotate-icon {
        margin-top: 1px;
        height: 20px;
        width: 23px;
    }

    .rotate-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    .clock-text {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 14px;
        display: block;
        float: right;
        padding: 2px 7px 0 0;
    }
</style>